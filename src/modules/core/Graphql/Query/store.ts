import { gql } from '@apollo/client'

export const QUERY_FIND_STORE_BY_ID = gql`
  query findStoreById($id: String!) {
    findStoreById(id: $id) {
      _id
      reference
      name
      type
      status
      rating
      logo
      poster
      user {
        _id
        country
        password
        email
        userName
        firstName
        lastName
        rating
        status
      }
      size
    }
  }
`
