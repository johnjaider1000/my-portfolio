import { useContext } from 'react'
import { EnvProps, GeneralContext } from '@/core/store/context/GeneralContext'

const useEnv = () => {
  const { env } = useContext(GeneralContext)

  const getKey = (key: keyof EnvProps) => {
    return env[key] // Access property directly using dot notation
  }

  return { getKey }
}

export default useEnv
