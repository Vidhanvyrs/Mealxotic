import classes from "./Checkout.module.css";
import { useRef, useState } from "react"; //you can use useReducer here instead as there are 4 such state that should be managed

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredstreet = streetInputRef.current.value;
    const enteredpostal = postalInputRef.current.value;
    const enteredcity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredstreet);
    const enteredcityIsValid = !isEmpty(enteredcity);
    const enteredpostalIsValid = isFiveChars(enteredpostal);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredcityIsValid,
      postalCode: enteredpostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredcityIsValid &&
      enteredpostalIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredstreet,
      city: enteredcity,
      postalCode: enteredpostal,
    });
  };

  const citycontrolclass = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;
  const namecontrolclass = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const streetcontrolclass = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const postalcontrolclass = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={namecontrolclass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please Enter a valid name!</p>}
      </div>
      <div className={streetcontrolclass}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please Enter a valid street!</p>}
      </div>
      <div className={postalcontrolclass}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please Enter a valid postalCode!</p>
        )}
      </div>
      <div className={citycontrolclass}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please Enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
