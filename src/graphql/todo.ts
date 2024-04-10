import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query {
    todoCollection {
      edges {
        node {
          content
          isCompleted
        }
      }
    }
  }
`;
