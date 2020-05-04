import React, { useState } from "react";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Input from "./Input";

const TodoItem = ({ todo }) => {
  console.log(todo);
  const [showInput, setShowInput] = useState(false);

  const handleEditBtnClick = () => {
    setShowInput(true);
  };

  const handledeleteBtnClick = (deletetodo) => {
    console.log(todo);
  };
  return (
    <li>
      <CheckBox label={!showInput} />
      {showInput && <Input value={""} />}
      <Button chilren="Edit" onClick={handleEditBtnClick} />
      <Button chilren="Delete" />
    </li>
  );
};
export default TodoItem;
