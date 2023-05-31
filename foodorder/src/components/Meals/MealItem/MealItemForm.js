import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputref = useRef();
  const submithandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputref.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submithandler}>
      <Input
        ref={amountInputref}
        label="Amount"
        input={{
          id: "Amount" + props.id, //its not neccessary to add this but as max told so we did
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter a valid number (1-5)</p>}
    </form>
  );
};
export default MealItemForm;
