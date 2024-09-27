import { useEffect } from 'react'
import useLazyQuery from './useLazyQuery'
import { AxiosRequestConfig, AxiosError } from 'axios'

interface UseQueryState<T> {
  loading: boolean
  data: T | null
  error: AxiosError | null
}

const useQuery = <T>(
  url: string,
  params: Record<string, any>,
  options?: AxiosRequestConfig & { skip: boolean }
): UseQueryState<T> => {
  const [executeQuery, { loading, data, error }] = useLazyQuery<T>(url, options)

  useEffect(() => {
    executeQuery(params).catch((error) => {
      console.error('Error ejecutando la consulta automáticamente:', error)
    })
  }, [executeQuery, params])

  return { loading, data, error }
}

export default useQuery
