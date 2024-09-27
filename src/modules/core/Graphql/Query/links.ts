import { gql } from '@apollo/client'

export const QUERY_GET_ALL_LINKS = gql`
  query Query {
    links: getAllLinks {
      _id
      code
      createdAt
      message
      phones
      status
      type
      user {
        _id
        country
        description
        email
        firstName
        lastName
        rating
        status
      }
    }
  }
`

export const QUERY_FIND_LINKS_BY_ID = gql`
  query findLinkById($id: String!) {
    links: findLinkById(id: $id) {
      _id
      code
      type
      status
      phone
      message
    }
  }
`
// elimine el user, el code, type, status, phone, message
