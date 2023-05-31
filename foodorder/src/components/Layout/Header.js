import { Fragment } from "react";

import mealsImage from "../../assets/food2.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>👨‍🍳Mealxotic!</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          className={classes["fade-in"]}
          src={mealsImage}
          alt="A table full of delicious food"
        />
      </div>
    </Fragment>
  );
};
export default Header;
