import { gql } from '@apollo/client'

export const MUTATION_CREATE_PRODUCT = gql`
  mutation createProduct($data: InputProducts!) {
    createProduct(data: $data) {
      _id
      name
      description
      # user {
      #   _id
      #   country
      #   password
      #   email
      #   userName
      #   firstName
      #   lastName
      #   rating
      #   status
      # }
      images
      price
      rating
      #   status
    }
  }
`

export const MUTATION_UPDATE_PRODUCT = gql`
  mutation updateProduct($id: String!, $data: InputProducts!) {
    updateProduct(id: $id, data: $data) {
      _id
      name
      description
      # user {
      #   _id
      #   country
      #   password
      #   email
      #   userName
      #   firstName
      #   lastName
      #   rating
      #   status
      # }
      images
      price
      rating
      #   status
    }
  }
`

export const MUTATION_DELETE_PRODUCT = gql`
  mutation deleteProduct($id: String!) {
    deleteProduct(id: $id) {
      _id
      name
      description
      images
      price
      rating
      status
    }
  }
`
