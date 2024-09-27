import { gql } from "@apollo/client";

export const QUERY_FIND_FILE_BY_ID = gql`
  query findFileById($id: String!) {
    findFileById(id: $id) {
      _id
      name
      type
      status
      user
      size
    }
  }
`