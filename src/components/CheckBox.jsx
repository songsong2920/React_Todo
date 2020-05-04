import React from "react";

// [Component를 만드는 방법]
// 1. 재사용성 - 어디든 쓸 수 있게 만들어야 한다.

const CheckBox = ({ label }) => {
  return (
    <label>
      {label}
      <input className="check" type="checkbox" />
    </label>
  );
};
export default CheckBox;
