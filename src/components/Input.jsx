import React, { useState } from "react";

const Input = ({ className }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value.trim());
  };
  return (
    <label>
      <input
        type="text"
        className={className}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};
export default Input;
