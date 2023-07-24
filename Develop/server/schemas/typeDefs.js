
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    bookId: ID!
    title: String!
    author: String!
    description: String!
    image: String
    link: String
  }
  type User {
    _id: ID!
		username: String!
    email: String!
    bookCount: Int
    saveBooks: [Book]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
   me: User
  }
  input BookInput {
    bookId: ID!
    title: String!
    author: String!
    description: String!
    image: String
    link: String
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!,username: String!, password: String!):Auth
    saveBook(bookData: BookInput!):User
    removeBook(bookId: ID!): User
    

  }
  
`;

module.exports = typeDefs;
