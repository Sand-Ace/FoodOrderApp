import logo from "../assets/logo.jpg";
import Button from "./UI/Button";

import CartContext from "../store/CartContext";
import { useContext } from "react";

const Header = () => {
  const { items } = useContext(CartContext);

  const totalNumberofItems = items.reduce((totalNumberOfItem, item) => {
    return totalNumberOfItem + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Food order logo" />
        <h1>Food order app</h1>
      </div>
      <nav>
        <Button textOnly>Cart ( {totalNumberofItems} )</Button>
      </nav>
    </header>
  );
};

export default Header;
