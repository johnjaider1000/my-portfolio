export const getPreferredLanguage = (ctx: any) => {
  const langHeader = ctx?.req?.headers['accept-language']
  const locale = ctx?.locale
  return locale || (langHeader || '').match(/^[a-zA-Z]{2,10}/)?.[0] || 'en'
}

export const getComponentPageProps = async (Component: any, ctx: any) => {
  return Component.getInitialProps
    ? (await Component.getInitialProps(ctx)) || {}
    : {}
}
