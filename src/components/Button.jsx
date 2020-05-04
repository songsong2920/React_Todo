import React, { useState } from "react";

const Button = ({ type, chilren, onClick }) => {
  
  const [isClicked, setIsClicked] = useState(false);

  const handleBtnClick = () => {
    setIsClicked(true);
    if (onClick) {
      onClick(isClicked);
    }
  };
  return (
    <button type={type} onClick={handleBtnClick}>
      {chilren}
    </button>
  );
};
export default Button;
