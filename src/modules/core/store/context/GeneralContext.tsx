import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import getGeoIP from '@/api/externals/geoip'
import { CURRENT_LANG } from '@/modules/core/constants/cookieConstants'
import {
  getLocalStorageFromKey,
  setLocalStorageFromKey,
} from '@/modules/core/utils/localStorage'
import { ContextProps } from '@/modules/core/interfaces/context'
import { setCookie } from '@/modules/core/utils/cookie'
import LangSelector from '@/modules/examples/components/shared/LangSelector'
import { styled } from '@mui/material'

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
  bannerAnimated: boolean
  toggleBannerStatus: () => void
}

export const GeneralContext = createContext({} as GeneralContextProps)

const GEOP_IP_PAGES = ['/']

export const GeneralContextProvider = ({
  children,
  pageProps,
}: ContextProps) => {
  const { locale, pathname, push } = useRouter()
  const [bannerAnimated, setBannerStatus] = useState<boolean>(true)
  const [env, setEnv] = useState<any>(pageProps?.env)
  const [lang, setCurrentLang] = useState<string>(
    pageProps?.lang ||
      getLocalStorageFromKey({ key: CURRENT_LANG }) ||
      locale?.toLocaleLowerCase() ||
      'en'
  )
  const [geoip, setGeoIP] = useState<GeoIP>()

  const saveLangPreference = (lang: string) => {
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

  const toggleBannerStatus = () => {
    setBannerStatus(false)
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
        bannerAnimated,
        toggleBannerStatus,
      }}
    >
      <LangContainer>
        <LangSelector className='lang-selector' />
      </LangContainer>

      {children}
    </GeneralContext.Provider>
  )
}

const LangContainer = styled('div')`
  .lang-selector {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9;
  }
`
