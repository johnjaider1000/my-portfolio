import { gql } from "@apollo/client";

export const QUERY_FIND_PHONE_BY_ID = gql`
  query findPhoneById($id: String!) {
    findPhoneById(id: $id) {
      _id
      number
      prefix
      status
      user
      country
    }
  }
`