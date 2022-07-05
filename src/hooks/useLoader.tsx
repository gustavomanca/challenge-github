import { useState } from 'react'
import { api } from '../services/api'

function useLoader() {
  const [loading, setLoading] = useState(false)

  api.interceptors.request.use(
    (request) => {
      setLoading(true)
      return request
    },
    (error) => {
      setLoading(false)
      return Promise.reject(error)
    }
  )

  api.interceptors.response.use(
    (config) => {
      setLoading(false)
      return config
    },
    (error) => {
      setLoading(false)
      return Promise.reject(error)
    }
  )

  return { loading }
}

export default useLoader
