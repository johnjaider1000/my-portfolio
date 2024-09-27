import { gql } from '@apollo/client'

export const QUERY_LOGIN = gql(`
  query login($username:String!, $password:String!){
    login(username:$username, password:$password)
  }
`)
