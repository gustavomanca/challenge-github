import { FormEvent, useState } from 'react'

import Button from '../../components/Button'
import Card from '../../components/Card/User'
import TextField from '../../components/TextField'

import { findUser } from '../../services/api'
import { User } from '../../services/typings'

import * as S from './styles'

function Home() {
  const [fieldValue, setFieldValue] = useState('')
  const [user, setUser] = useState<User | null>(null)

  function clear() {
    setFieldValue('')
    setUser(null)
  }

  async function onSearchUser() {
    if (!fieldValue) return
    const data = await findUser(fieldValue)
    setUser(data)
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    onSearchUser()
  }

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

      {user && <Card {...user} />}
    </S.Container>
  )
}

export default Home
