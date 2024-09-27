import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { destroyCookie, setCookie } from '@/core/utils/cookie'
import { decodeUser } from '@/modules/core/utils/parsers'
import { AuthUserProps } from '@/modules/auth/interfaces/context'
import { ContextProps } from '@/modules/core/interfaces/context'
import { AUTH_TOKEN } from '@/modules/auth/constants/localStorage'
import { GQLResult } from '@/modules/core/interfaces/general'
import { QUERY_FIND_USER_BY_ID } from '@/modules/auth/Graphql/Query/users'
import { SESSION_TOKEN } from '@/modules/auth/constants/cookies'

const ADMIN_REDIRECT_PATHS = ['/login', '/register']

export interface AuthContextProps {
  authToken?: string | null
  user?: AuthUserProps
  isAuth?: boolean
  setAuthToken: (token: string) => void
  logout: () => void
  setUser: (user?: AuthUserProps) => void
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthContextProvider = ({ pageProps, children }: ContextProps) => {
  const { pathname, push } = useRouter()
  const currentUserID = decodeUser(pageProps?.session)?._id

  //Obtiene la sesión actual desde el localStorage o la cookie disponible
  const getCurrentToken = () => {
    return (
      pageProps.session ||
      (typeof window !== 'undefined'
        ? window.localStorage.getItem(AUTH_TOKEN)
        : undefined)
    )
  }

  const [authToken, setAuthTokenInternal] = useState<string | null>(
    getCurrentToken
  )

  const [isAuth, setIsAuth] = useState<boolean>(
    () => authToken != null && authToken.trim() !== ''
  )

  //Decodifica el token de la sesión y obtiene los datos básicos del usuario (name, username, email, etc)
  const [user, setUser] = useState<AuthUserProps | undefined>(() => {
    const sessionUser = decodeUser(authToken || '')
    const currentUser = pageProps.user || {}
    return { ...sessionUser, ...currentUser }
  })

  const { data: userData } = useQuery<GQLResult<'user', UserInterface>>(
    QUERY_FIND_USER_BY_ID,
    {
      variables: {
        id: currentUserID,
      },
      skip: pageProps?.user || !currentUserID,
    }
  )

  //Establece la sesión y la almacena en el estado, el localStorage y crea una cookie
  const setAuthToken = (token: string) => {
    window.localStorage.setItem(AUTH_TOKEN, token)
    setCookie({ name: SESSION_TOKEN, value: token })
    setAuthTokenInternal(token)
    setUser(decodeUser(token))
    setIsAuth(true)
  }

  //Elimina todos los datos de la sesión
  const logout = () => {
    window.localStorage.removeItem(AUTH_TOKEN)
    destroyCookie(SESSION_TOKEN, null)
    setAuthTokenInternal('')
    setIsAuth(false)
  }

  //Redirecciona a admin o a login si los pathname (página actual) coinciden
  useEffect(() => {
    if (ADMIN_REDIRECT_PATHS.includes(pathname) && isAuth) {
      push('/dashboard')
    }

    if (pathname?.search('/dashboard') >= 0 && !isAuth) {
      push('/login')
    }
  }, [isAuth, pathname, push])

  useEffect(() => {
    if (pageProps?.user) {
      setUser(pageProps?.user)
    }

    if (!userData?.user) {
      return
    }
    setUser(userData?.user as AuthUserProps)
  }, [pageProps?.user, userData, userData?.user])

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        user,
        authToken,
        setAuthToken,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
