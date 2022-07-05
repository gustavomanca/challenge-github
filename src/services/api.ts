import axios from 'axios'
import { User } from './typings'

const api = axios.create({
  baseURL: ' https://api.github.com',
  headers: {
    'Content-type': 'application/json'
  }
})

export async function findUser(user: string) {
  try {
    const { data } = await api.get<User>(`/users/${user}`)
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function findRepos(user: string) {
  try {
    const { data } = await api.get<User>(`/users/${user}/repos`)
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}
