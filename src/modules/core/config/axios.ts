import axios from 'axios'
import { getLocalStorageFromKey } from '../utils/localStorage'
import { AUTH_TOKEN } from '@/modules/auth/constants/localStorage'

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    // Puedes añadir tokens de autenticación aquí
    const token = getLocalStorageFromKey({ key: AUTH_TOKEN })
    config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejo de errores global
    return Promise.reject(error)
  }
)

export default axiosInstance
