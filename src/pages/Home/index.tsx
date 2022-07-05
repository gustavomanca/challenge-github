import { FormEvent, useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Button from '../../components/Button'
import Card from '../../components/Card/User'
import TextField from '../../components/TextField'

import { findRepos, findUser } from '../../services/api'
import { Repo, User } from '../../services/typings'

import * as S from './styles'

type LocationProps = {
  user: User
}

function HomePage() {
  const location = useLocation().state as LocationProps

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
    setRepos(repos as Repo[])
  }, [user])

  async function onSearchUser() {
    if (!fieldValue) return
    const user = await findUser(fieldValue)
    if (!user) return
    setUser(user)
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    onSearchUser()
  }

  useEffect(() => {
    if (!user) return
    fetchRepos()
  }, [fetchRepos, user])

  useEffect(() => {
    if (!location.user) return
    setFieldValue(location.user.login)
    setUser(location.user)
  }, []) //eslint-disable-line

  return (
    <S.Container onSubmit={onSubmit}>
      <TextField
        onChange={({ target }) => setFieldValue(target.value)}
        value={fieldValue}
      />

      <Button type="submit">Buscar usuário</Button>
      {fieldValue && (
        <Button variant="outlined" onClick={clear}>
          Limpar
        </Button>
      )}

      {user && <Card repos={repos} user={user} variant="bordered" />}
    </S.Container>
  )
}

export default HomePage
