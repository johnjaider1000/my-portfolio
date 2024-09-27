import {
  ApolloQueryResult,
  DocumentNode,
  OperationVariables,
  useQuery,
} from '@apollo/client'
import getApolloClient from '../GraphqlHttpSetup'
import { getProp } from '@/utils'

interface Props {
  query: DocumentNode
}

interface Result<T> {
  loading?: boolean
  data?: T
  error?: any
}

type Params = {
  variables?: OperationVariables
  result?: any
}

interface ServerParams extends Omit<Params, 'result'> {
  ctx?: any
  queryKeys?: Array<string>
}

interface UseMixResult<T> {
  useClient: (params: Params) => Result<T>
  getServer: (params: ServerParams) => Promise<ApolloQueryResult<T>>
  resolveProps: (params: ServerParams & {redirectPath?: string, validatePath?: string}) => Promise<any>
}

const dualQuery = <T>({ query }: Props): UseMixResult<T> => {
  const utils: UseMixResult<T> = {
    useClient: ({ variables, result }) => {
      const { loading, data, error } = useQuery<T>(query, {
        variables: variables,
        skip: result,
      })
      return { loading, data: data ? data : result, error }
    },
    getServer: ({ variables, ctx, queryKeys = [] }) => {
      const client = getApolloClient()

      const customVariables: OperationVariables = {
        ...(variables || {}),
      }

      queryKeys.forEach((key: string) => {
        if (queryKeys.includes(key)) {
          customVariables[key] = getProp(ctx, `query.${key}`)
        }
      })

      return client.query<T>({
        query,
        variables: customVariables,
      })
    },
    resolveProps: async ({ variables, ctx, queryKeys = [], validatePath, redirectPath }) => {
      const { data } = await utils.getServer({ variables, ctx, queryKeys })
      if(validatePath && !getProp(data, validatePath) && redirectPath) {
        return {
          redirect: {
            destination: redirectPath,
            permanent: false,
          }
        }
      }
      if (data) {
        return {
          props: {
            result: data,
          },
        }
      }
    },
  }

  return utils
}

export default dualQuery
