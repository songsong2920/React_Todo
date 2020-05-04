import React, { useState } from "react";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Input from "./Input";

const TodoItem = (todo) => {
  console.log("111");
  const [showInput, setShowInput] = useState(false);

  const handleEditBtnClick = () => {
    setShowInput(true);
  };

  const handledeleteBtnClick = (deletetodo) => {
    console.log(todo);
  };
  return (
    <li>
      <CheckBox label={!showInput && todo.title} />
      {showInput && <Input value={""} />}
      <Button chilren="Edit" onClick={handleEditBtnClick} />
      <Button chilren="Delete" />
    </li>
  );
};
export default TodoItem;
