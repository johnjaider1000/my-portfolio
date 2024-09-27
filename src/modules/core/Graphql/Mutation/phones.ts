import { gql } from '@apollo/client'

export const MUTATION_CREATE_PHONE = gql`
  mutation CreatePhone($data: InputPhones!) {
    createPhone(data: $data) {
      _id
      number
      prefix
      status
      user
      country
    }
  }
`

export const MUTATION_UPDATE_PHONES = gql`
  mutation updatePhone($id: String!, $data: InputPhones!) {
    updatePhone(id: $id, data: $data) {
      _id
      number
      prefix
      status
      user
      country
    }
  }
`

export const MUTATION_DELETE_PHONES = gql`
  mutation deletePhone($id: String!) {
    deletePhone(id: $id) {
      _id
      number
      prefix
      status
      user
      country
    }
  }
`
