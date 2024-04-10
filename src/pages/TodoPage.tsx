import classNames from "classnames/bind";
import { useQuery } from "@apollo/client";
import styles from "./TodoPage.module.scss";
import Wrapper from "../layout/Wrapper";
import backgroundCover from "../assets/bg-desktop-light.jpg";
import iconMoon from "../assets/icon-moon.svg";
import { useState } from "react";
import { GET_TODOS } from "../graphql/todo";

const cx = classNames.bind(styles);

export default function TodoPage() {
  const { loading, data } = useQuery(GET_TODOS);
  const [todo, setTodo] = useState("");

  return (
    <div>
      <div className={cx("background")}>
        <img src={backgroundCover} alt="background-bg" />
      </div>
      <div className={cx("contents")}>
        <Wrapper>
          <div className={cx("header")}>
            <h1 className={cx("title")}>TODO</h1>
            <img src={iconMoon} alt="icon-sun" />
          </div>
          <div className={cx("inputField")}>
            <div className={cx("checkArea")}></div>
            <input
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              type="text"
              placeholder="Create a new todo..."
            />
          </div>
          <div className={cx("todos")}>
            <div className={cx("todoArea")}>
              {loading ? (
                <>loading...</>
              ) : (
                <>
                  {data.todoCollection.edges.map((node: any, i: number) => {
                    return (
                      <li key={i}>
                        <div className={cx("todo")}>
                          <div className={cx("checkArea")}></div>
                          <div>{node.node.content}</div>
                        </div>
                      </li>
                    );
                  })}
                </>
              )}
            </div>
            <div className={cx("todoFooter")}>
              <div>5 items left</div>
              <ul className={cx("todoControl")}>
                <li>All</li>
                <li>Active</li>
                <li>Completed</li>
              </ul>
              <div>Clear Completed</div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
