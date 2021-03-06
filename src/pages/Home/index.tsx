import { FormEvent, useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

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
  const locationState = useLocation().state as LocationProps
  const location = useLocation()
  const navigate = useNavigate()

  const [fieldValue, setFieldValue] = useState('')
  const [user, setUser] = useState<User | null>(null)
  const [repos, setRepos] = useState<Repo[] | null>(null)

  function clear() {
    setFieldValue('')
    setUser(null)
    navigate(location.pathname, {})
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
    if (!locationState?.user) return
    setFieldValue(locationState.user.login)
    setUser(locationState.user)
  }, []) //eslint-disable-line

  return (
    <S.Container>
      <S.Title>Busque um usuário do GitHub</S.Title>
      <S.Form onSubmit={onSubmit}>
        <TextField
          onChange={({ target }) => setFieldValue(target.value)}
          value={fieldValue}
        />

        <S.Actions>
          <Button disabled={!fieldValue} type="submit">
            Buscar usuário
          </Button>
          {fieldValue && (
            <Button variant="outlined" onClick={clear}>
              Limpar
            </Button>
          )}
        </S.Actions>

        {user && <Card repos={repos} user={user} variant="bordered" />}
      </S.Form>
    </S.Container>
  )
}

export default HomePage
