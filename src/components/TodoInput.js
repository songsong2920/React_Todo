import React, { Fragment } from "react";

const TodoInput = ({ className, id, type }) => {
  return (
    <Fragment>
      <label htmlFor={id} />
      <input type="text" className={className} />
    </Fragment>
  );
};
export default TodoInput;
