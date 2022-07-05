import { useState } from 'react'

import Button from '../../components/Button'
import TextField from '../../components/TextField'

import { findUser, findRepos } from '../../services/api'
import { User } from '../../services/typings'

function Home() {
  const [fieldValue, setFieldValue] = useState('')
  const [user, setUser] = useState<User | null>(null)

  async function onSearchUser() {
    if (!fieldValue) return
    const data = await findUser(fieldValue)
    setUser(data)
  }

  async function onSearchRepos() {
    if (!fieldValue) return
    const data = await findRepos(fieldValue)
    console.log({ data })
  }

  return (
    <div>
      <TextField
        onChange={({ target }) => setFieldValue(target.value)}
        value={fieldValue}
      />
      <Button onClick={onSearchUser} type="button">
        Buscar
      </Button>
      {user && (
        <>
          <p>Repo:</p>
          <Button onClick={onSearchRepos}>Buscar Repos</Button>
        </>
      )}
    </div>
  )
}

export default Home
