import '@/core/theme/global.css'
import 'nprogress/nprogress.css'
import Router from 'next/router'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '@/core/config/cache/createEmotionCache'
import AppComponent from '@/core/components/shared/app'
import NProgress from 'nprogress'
import { ApolloProvider } from '@apollo/client'
import getApolloClient from '@/core/Graphql/GraphqlHttpSetup'
import { getCookie } from '@/core/utils/cookie'
import { CURRENT_LANG } from '@/core/constants/cookieConstants'
import { getProp } from '@/core/utils'
import { SESSION_TOKEN } from '@/modules/auth/constants/cookies'
import { ThemeContextProvider } from '@/modules/core/store/context/ThemeContext'

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
  const client = getApolloClient(pageProps?.session)

  return (
    <>
      <CacheProvider value={emotionCache}>
        <ApolloProvider client={client}>
          <ThemeContextProvider>
            <AppComponent pageProps={pageProps} Component={Component} />
          </ThemeContextProvider>
        </ApolloProvider>
      </CacheProvider>
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }: any) => {
  const langHeader = ctx?.req?.headers['accept-language']
  const locale =
    ctx.locale || (langHeader || '').match(/^[a-zA-Z]{2,10}/)?.[0] || 'en'
  const query = getProp(ctx, 'query', {})

  const pageProps = Component.getInitialProps
    ? (await Component.getInitialProps(ctx)) || {}
    : {}

  const session = getCookie(SESSION_TOKEN, ctx)
  const lang = getCookie(CURRENT_LANG, ctx)
  pageProps.session = session
  // pageProps.user = await getCurrentUser(session)
  pageProps.lang = locale || lang
  return { pageProps: { ...pageProps, ...query, env: process.env } }
}

export default App
