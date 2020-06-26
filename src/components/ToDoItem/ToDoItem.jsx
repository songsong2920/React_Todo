import React, { useState, useContext } from "react";
import Button from "../Button/Button";
import CheckBox from "../Inputs/CheckBox";
import Input from "../Inputs/Input";
import ToDoListcontext from "../TodoListContext/ToDoList.context";

const TodoItem = ({ item }) => {
  const [showInput, setShowInput] = useState(false);
  const [todoData, setTodoData] = useContext(ToDoListcontext);

  const editBtnClick = (e) => {
    setShowInput(true);
    console.log(item.title);
    console.log(e.target);
  };

  const deleteBtnClick = () => {
    console.log(item);
    const todoIndex = todoData.findIndex((todo) => todo.id === item.id);
    const todoResult = todoData.slice();
    const todo = todoResult.splice(todoIndex, 1);

    setTodoData(todoResult);
  };

  return (
    <li key={item.id}>
      <CheckBox label={!showInput && item.title} />
      {showInput && <Input value={item.title} />}
      <Button chilren="Edit" onClick={editBtnClick} />
      <Button chilren="Delete" onClick={deleteBtnClick} />
    </li>
  );
};
export default TodoItem;
