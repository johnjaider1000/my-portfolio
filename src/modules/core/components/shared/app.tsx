import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import { GeneralContextProvider } from '@/core/store/context/GeneralContext'
import { ThemeContextProvider } from '@/core/store/context/ThemeContext'
// import { AuthContextProvider } from '@/store/context/AuthContext'
// import { MenuContextProvider } from '@/store/context/admin/menu/MenuContext'
import { ContextProps } from '@/core/interfaces/context'

interface Props {
  pageProps: any
  Component: any
}

const AppComponent = ({ pageProps, Component }: Props) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <CssBaseline />

      <AppState pageProps={pageProps}>
        <Component {...pageProps} />
      </AppState>
    </>
  )
}

const AppState = ({ pageProps, children }: ContextProps) => {
  return (
    <ThemeContextProvider>
      <GeneralContextProvider pageProps={pageProps}>
        {/* <AuthContextProvider pageProps={pageProps}>
        <MenuContextProvider pageProps={pageProps}> */}
        {children}
        {/* </MenuContextProvider>
      </AuthContextProvider> */}
      </GeneralContextProvider>
    </ThemeContextProvider>
  )
}

export default AppComponent
