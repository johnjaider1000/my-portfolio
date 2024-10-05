import 'nprogress/nprogress.css'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import NProgress from 'nprogress'
import Router from 'next/router'

import '@/modules/core/theme/global.css'
import createEmotionCache from '@/modules/core/config/cache/createEmotionCache'
import AppComponent from '@/modules/core/components/shared/app'
import { getCookie } from '@/modules/core/utils/cookie'
import { CURRENT_LANG } from '@/modules/core/constants/cookieConstants'
import { getProp } from '@/modules/core/utils'
import {
  getComponentPageProps,
  getPreferredLanguage,
} from '@/modules/core/utils/init'

Router.events.on('routeChangeStart', (url: any) => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => () => NProgress.done())

interface WarefAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: WarefAppProps) => {
  return (
    <>
      <CacheProvider value={emotionCache}>
          <AppComponent pageProps={pageProps} Component={Component} />
      </CacheProvider>
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }: any) => {
  const preferredLanguage = getPreferredLanguage(ctx)
  const query = getProp(ctx, 'query', {})

  const pageProps = await getComponentPageProps(Component, ctx)

  const storedLang = getCookie(CURRENT_LANG, ctx)

  // const currentSession = await getCurrentUser(sessionToken)
  // const sessionData = currentSession ? currentSession : {}
  const sessionData = {}

  return {
    pageProps: {
      ...pageProps,
      ...query,
      ...sessionData,
      lang: preferredLanguage || storedLang,
      env: process.env,
    },
  }
}

export default App
