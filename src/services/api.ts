import axios, { AxiosError } from 'axios'
import cogoToast from 'cogo-toast'
import { Branch, Repo, User } from './typings'

const BASE_URL = 'https://api.github.com'

export type ApiResponse = {
  status: number
  data?: any
  error?: boolean
  message?: any
}

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json'
  }
})

export async function findUser(user: string) {
  try {
    const { data } = await api.get<User>(`/users/${user}`)
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      cogoToast.error(error?.response?.data?.message || '', { hideAfter: 5 })
      return Promise.reject(error)
    }
  }
}

export async function findRepos(user: string) {
  try {
    const { data } = await api.get<Repo[]>(`/users/${user}/repos`)
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      cogoToast.error(error?.response?.data?.message || '', { hideAfter: 5 })
      return Promise.reject(error)
    }
  }
}

export async function listBranches(user: string, repo: string) {
  try {
    const { data } = await api.get<Branch[]>(`/repos/${user}/${repo}/branches`)
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      cogoToast.error(error?.response?.data?.message || '', { hideAfter: 5 })
      return Promise.reject(error)
    }
  }
}

export async function listCommitsFromBranch(
  user: string,
  repo: string,
  branch: string
) {
  try {
    const { data } = await api.get(
      `/repos/${user}/${repo}/commits?sha=${branch}`
    )
    debugger //eslint-disable-line
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      cogoToast.error(error?.response?.data?.message || '', { hideAfter: 5 })
      return Promise.reject(error)
    }
  }
}
