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

export const ADD_TODO = gql`
  mutation ($content: String!, $isCompleted: Boolean!) {
    insertIntotodoCollection(
      objects: [{ content: $content, isCompleted: $isCompleted }]
    ) {
      affectedCount
      records {
        id
        content
        isCompleted
      }
    }
  }
`;
