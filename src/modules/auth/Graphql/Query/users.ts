import { gql } from '@apollo/client'

export const QUERY_GET_ALL_USERS = gql`
  query {
    getAllUsers {
      _id
      firstName
      lastName
      email
      username
    }
  }
`
export const QUERY_FIND_USER_BY_ID = gql`
  query Query($id: String!) {
    user:findUserById(id: $id) {
      _id
      username
      email
      firstName
      lastName
      profileImage {
        _id
        src
      }
      coverImage {
        _id
        src
      }
      description
      rating
      country
      status
    }
  }
`
export const QUERY_FIND_USER_BY_USERNAME = gql`
  query findUserByUsername($username: String!) {
    user: findUserByUsername(username: $username) {
      _id
      email
      username
      firstName
      lastName
      profileImage {
        _id
        src
      }
      coverImage {
        _id
        src
      }
      email
      rating
    }
  }
`

export const QUERY_FIND_USER_BY_EMAIL = gql`
  query findUserByEmail($email: String!) {
    user: findUserByEmail(email: $email) {
      _id
      email
    }
  }
`
