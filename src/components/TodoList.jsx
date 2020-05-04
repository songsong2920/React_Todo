import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "React Study", isCompleted: false },
    { id: 2, title: "React 22", isCompleted: false },
    { id: 3, title: "React 33", isCompleted: true },
  ]);
  return (
    <section>
      <h1>Todo List</h1>
      <h2>add item</h2>
      <p className="appbox">
        <Input className="add" />
        <Button type="button" chilren="Add" />
      </p>

      <h2>todo</h2>
      <ul>
        {todoList.map((todo) => (
          <>{!todo.isCompleted && <TodoItem key={todo.id} todo={todo} />}</>
        ))}
      </ul>
      <h2>completed</h2>
      <ul>
        {/* {todoList.map((item) => (
          <>
            {item.isCompleted && <TodoItem key={item.id} title={item.title} />}
          </>
        ))} */}
      </ul>
    </section>
  );
};
export default TodoList;
