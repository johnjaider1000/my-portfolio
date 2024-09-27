import { gql } from "@apollo/client";

export const MUTATION_CREATE_USER = gql`
  mutation createUser($data: InputUser!) {
    createUser(data: $data) {
      _id
      firstName
      lastName
      email
      username
      status
    }
  }
`