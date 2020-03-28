import { gql } from "apollo-boost";

export const BOOKS = gql`
  {
    notRead {
      id
      title
      imageUrl
    }
    read {
      id
      title
      imageUrl
    }
  }
`;

export const BOOKS_BY_ID = gql`
  query bookType($id: String!){
    book(id: $id) {
      id
      title
      duration
      read
      imageUrl
      author
      description
      rating
    }
  }
`;