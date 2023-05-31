import React from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/* to pass all the input that we recieved using props is added to input using spread operator */}
    </div>
  );
});
export default Input;
