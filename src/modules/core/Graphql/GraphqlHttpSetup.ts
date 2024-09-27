import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const getApolloClient = (token?: string) => {
  const link: any = createHttpLink({
    headers: {
      'apollo-require-preflight': 'true',
      authorization: `Bearer ${token}`,
    },
    uri: process.env.API_URL,
  })

  const client: ApolloClient<any> = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  })

  return client
}

export default getApolloClient
