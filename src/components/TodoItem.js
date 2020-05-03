import React, { Fragment } from "react";
import TodoButton from "./TodoButton";
import TodoCheckBox from "./TodoCheckBox";

const TodoItem = () => {
  return (
    <Fragment>
      <li>
        <TodoCheckBox />
        <label>React Study</label>
        <TodoButton label="Edit" />
        <TodoButton label="Delete" />
      </li>
      <li>
        <TodoCheckBox />
        <label>React Study</label>
        <TodoButton label="Edit" />
        <TodoButton label="Delete" />
      </li>
    </Fragment>
  );
};
export default TodoItem;
