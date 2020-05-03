import React from "react";

import TodoInput from "./TodoInput";
import TodoButton from "./TodoButton";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <section>
      <h1>Todo List</h1>
      <h2>add item</h2>
      <p className="appbox">
        <TodoInput className="add" id="add" />
        <TodoButton type="button" label="Add" />
      </p>

      <h2>todo</h2>
      <ul>
        <TodoItem />
      </ul>
      <h2>completed</h2>
      <ul></ul>
    </section>
  );
};
export default TodoList;
