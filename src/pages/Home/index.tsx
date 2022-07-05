import { FormEvent, useCallback, useEffect, useState } from 'react'

import Button from '../../components/Button'
import Card from '../../components/Card/User'
import TextField from '../../components/TextField'

import { findRepos, findUser } from '../../services/api'
import { Repo, User } from '../../services/typings'

import * as S from './styles'

function HomePage() {
  const [fieldValue, setFieldValue] = useState('')
  const [user, setUser] = useState<User | null>(null)
  const [repos, setRepos] = useState<Repo[] | null>(null)

  function clear() {
    setFieldValue('')
    setUser(null)
  }

  const fetchRepos = useCallback(async () => {
    if (!user?.login) return
    const repos = await findRepos(user.login)
    setRepos(repos)
  }, [user])

  async function onSearchUser() {
    if (!fieldValue) return
    const data = await findUser(fieldValue)
    setUser(data)
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    onSearchUser()
  }

  useEffect(() => {
    if (!user) return
    fetchRepos()
  }, [fetchRepos, user])

  return (
    <S.Container onSubmit={onSubmit}>
      <TextField
        onChange={({ target }) => setFieldValue(target.value)}
        value={fieldValue}
      />

      <Button type="submit">Buscar usuário</Button>
      {user && (
        <Button variant="outlined" onClick={clear}>
          Limpar
        </Button>
      )}

      {user && <Card repos={repos} user={user} variant="bordered" />}
    </S.Container>
  )
}

export default HomePage
