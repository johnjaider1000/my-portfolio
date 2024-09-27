import { get as getProp } from 'object-path'

interface Props {
  keyQueryValue: string
  keyResultPath: string
  queryFunction: any
}

export const getYupTestCallback = ({
  queryFunction,
  keyQueryValue,
  keyResultPath,
}: Props) => {
  return async (value: string) => {
    const { loading, data, error } = await queryFunction({
      variables: { [keyQueryValue]: value },
    })

    if (loading || error) {
      return false
    }

    return getProp(data, keyResultPath) == null
  }
}
