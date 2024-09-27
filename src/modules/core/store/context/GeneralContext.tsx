import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import getGeoIP from '@/api/externals/geoip'
import { CURRENT_LANG } from '@/core/constants/cookieConstants'
import {
  getLocalStorageFromKey,
  setLocalStorageFromKey,
} from '@/core/utils/localStorage'
import { ContextProps } from '@/core/interfaces/context'
import { setCookie } from '@/core/utils/cookie'

export interface GeoIP {
  ip: string
  hostname: string
  city: string
  region: string
  country: string
  postal: string
  timezone: string
}

export interface GeneralState {
  geoip?: GeoIP
}

export interface EnvProps {
  APP_NAME?: string
  ENVIRONTMENT?: string
}

export interface GeneralContextProps {
  generalState: GeneralState
  lang: string
  env: EnvProps
  setLang: (lang: string) => void
}

export const GeneralContext = createContext({} as GeneralContextProps)

const GEOP_IP_PAGES = ['/']

export const GeneralContextProvider = ({
  children,
  pageProps,
}: ContextProps) => {
  const { locale, pathname, push } = useRouter()
  const [env, setEnv] = useState<any>(pageProps?.env)
  const [lang, setCurrentLang] = useState<string>(
    pageProps?.lang ||
      getLocalStorageFromKey({ key: CURRENT_LANG }) ||
      locale?.toLocaleLowerCase() ||
      'en'
  )
  const [geoip, setGeoIP] = useState<GeoIP>()

  const saveLangPreference = (lang: string) => {
    console.log('Se guarda el lenguaje por defecto')
    setCookie({ name: CURRENT_LANG, value: lang })
    setLocalStorageFromKey({ key: CURRENT_LANG, value: lang })
  }

  useEffect(() => {
    if (locale && !pageProps?.lang) {
      saveLangPreference(lang)
    }
  }, [lang, locale, pageProps?.lang])

  useEffect(() => {
    if (!GEOP_IP_PAGES.includes(pathname)) {
      return
    }

    getGeoIP().then((response: any) => {
      setGeoIP(response)
    })
  }, [pathname, push])

  const setLang = (lang: string) => {
    saveLangPreference(lang)
    setCurrentLang(lang)
  }

  return (
    <GeneralContext.Provider
      value={{
        env,
        lang,
        generalState: {
          geoip,
        },
        setLang,
      }}
    >
      {children}
    </GeneralContext.Provider>
  )
}
