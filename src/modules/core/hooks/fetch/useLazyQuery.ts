import { useState, useCallback } from 'react'
import axiosInstance from '@/config/axios'
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

interface UseLazyQueryState<T> {
  loading: boolean
  data: T | null
  error: AxiosError | null
}

type ExecuteQuery<T> = (
  params?: Record<string, any>
) => Promise<AxiosResponse<T>>

const useLazyQuery = <T>(
  url: string,
  options?: AxiosRequestConfig
): [ExecuteQuery<T>, UseLazyQueryState<T>] => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<AxiosError | null>(null)

  const executeQuery: ExecuteQuery<T> | any = useCallback(
    async (params = {}) => {
      setLoading(true)
      setError(null)
      try {
        const config: AxiosRequestConfig = {
          url,
          method: options?.method || 'GET',
          headers: options?.headers || {},
          params: options?.method === 'GET' ? params : undefined,
          data: options?.method !== 'GET' ? params : undefined,
          ...options,
        }
        const response: AxiosResponse<T> = await axiosInstance(config)
        setData(response.data)
        return response // Retorna el response aquí
      } catch (err) {
        setError(err as AxiosError)
      } finally {
        setLoading(false)
      }
    },
    [url, options]
  )

  return [executeQuery, { loading, data, error }]
}

export default useLazyQuery
