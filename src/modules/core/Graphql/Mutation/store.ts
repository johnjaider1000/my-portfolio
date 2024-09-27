import { gql } from "@apollo/client"

export const MUTATION_CREATE_STORE = gql`
  mutation createStore($data: InputStore!) {
    createStore(data: $data) {
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

export const MUTATION_UPDATE_STORE = gql`
  mutation updateStore($id: String!, $data: InputStore!) {
    updateStore(id: $id, data: $data) {
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

export const MUTATION_DELETE_STORE = gql`
  mutation deleteStore($id: String!) {
    deleteStore(id: $id) {
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
