import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCardButton.module.css";
const HeaderCardButton = (props) => {
  const [btnisbumped, setbtnisbumped] = useState(false);
  const cartctx = useContext(CartContext);
  // we used object destructuring to pull out the items from the cartctx component
  const { items } = cartctx;
  const numberOfCartItems = items.reduce((currnumber, item) => {
    return currnumber + item.amount;
  }, 0);
  const btnClass = `${classes.button} ${btnisbumped ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnisbumped(true);
    // sirf itta karne se kaam nahi chalega kyuki hame ek timer bhi dena padega ki itte time baad ye condition firse false ho jaye taki ham firse animation dikha sake
    const timer = setTimeout(() => {
      setbtnisbumped(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCardButton;
