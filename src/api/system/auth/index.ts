import { QUERY_FIND_USER_BY_ID } from '@/modules/auth/Graphql/Query/users'
import getApolloClient from '@/modules/core/Graphql/GraphqlHttpSetup'
import { GQLResult } from '@/modules/core/interfaces/general'
import { decodeUser } from '@/modules/core/utils/parsers'

export const getCurrentUser = async (
  sessionToken: string | null
): Promise<UserInterface | undefined> => {
  if (!sessionToken) {
    return
  }

  const client = getApolloClient()
  const userDecoded = decodeUser(sessionToken)

  if (!userDecoded?.id) {
    return
  }

  const { data } = await client.query<GQLResult<'user', UserInterface>>({
    query: QUERY_FIND_USER_BY_ID,
    variables: { userId: userDecoded?.id },
  })

  return data?.user
}
