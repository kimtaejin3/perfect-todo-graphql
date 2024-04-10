import classNames from "classnames";
import { gql, useQuery } from "@apollo/client";
import styles from "./TodoPage.module.scss";

const cx = classNames.bind(styles);

const GET_TODOS = gql`
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
export default function TodoPage() {
  const { loading, data } = useQuery(GET_TODOS);

  return (
    <div>
      <h1 className={cx("title")}>투두리스트</h1>
      {loading ? (
        <>loading...</>
      ) : (
        <>
          {data.todoCollection.edges.map((node: any, i: number) => {
            return <li key={i}>{node.node.content}</li>;
          })}
        </>
      )}
    </div>
  );
}
