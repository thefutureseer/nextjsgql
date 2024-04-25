import {gql} from 'apollo-server-micro';

// User type that describes the shape of a Github user 
export const typeDefs = gql`
  type User {
    id: ID
    # name: String
    login: String
    avatar_url: String
  }

  type Query {
    getUsers: [User]
    getUser(name: String!): User!
  }


`