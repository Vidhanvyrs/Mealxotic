import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartshown, setcartshown] = useState(false);
  const showcarthandler = () => {
    setcartshown(true);
  };
  const hidecarthandler = () => {
    setcartshown(false);
  };

  return (
    <CartProvider>
      {cartshown && <Cart onClose={hidecarthandler} />}
      {/* position of cart does not matter as it is an overlay */}
      <Header onShowCart={showcarthandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
