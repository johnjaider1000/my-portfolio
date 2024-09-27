import { gql } from '@apollo/client'

export const MUTATION_CREATE_LINKS = gql`
  mutation createLink($data: InputLinks!) {
    createLink(data: $data) {
      _id
      code
      type
      # status
      # user
      phone
      message
    }
  }
`

export const MUTATION_UPDATE_LINKS = gql`
  mutation updateLink($id: String!, $data: InputLinks!) {
    updateLink(id: $id, data: $data) {
      _id
      code
      type
      status
      user
      phone
      message
    }
  }
`

export const MUTATION_DELETE_LINKS = gql`
  mutation deleteLink($id: String!) {
    deleteLink(id: $id) {
      _id
      code
      type
      status
      user
      phone
      message
    }
  }
`
