import { gql } from '@apollo/client'

export const QUERY_GET_ALL_PRODUCT = gql`
  query Query {
    products: getAllProducts {
      _id
      name
      description
      images
      price
      rating
      status
      user {
        _id
        firstName
        lastName
        country
        description
        email
        rating
        status
      }
    }
  }
`

export const QUERY_FIND_PRODUCT_BY_ID = gql`
  query findProductById($id: String!) {
    products: findProductById(id: $id) {
      _id
      name
      description

      price
      rating
      status
    }
  }
`

// elimine images
