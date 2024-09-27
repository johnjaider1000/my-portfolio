import { gql } from '@apollo/client'

export const MUTATION_CREATE_FILE = gql`
  mutation createFile($data: InputFiles!) {
    createFile(data: $data) {
      _id
      name
      type
      status
      user
      size
    }
  }
`

export const MUTATION_UPDATE_FILE = gql`
  mutation updateFile($id: String!, $data: InputFiles!) {
    updateFile(id: $id, data: $data) {
      _id
      name
      type
      status
      user
      size
    }
  }
`

export const MUTATION_DELETE_FILE = gql`
  mutation deleteFile($id: String!) {
    deleteFile(id: $id) {
      _id
      name
      type
      status
      user
      size
    }
  }
`
