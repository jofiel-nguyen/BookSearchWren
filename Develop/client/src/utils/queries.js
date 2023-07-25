import { gql } from '@apollo/client';

const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        author
        description
        image
        link
      }
    }
  }
`;

export { GET_ME };
