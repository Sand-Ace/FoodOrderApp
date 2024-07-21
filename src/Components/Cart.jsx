import Modal from "./UI/Modal";
import Button from "./UI/Button";
import CartItem from "./CartItem";

import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

import { currencyFormatter } from "../utils/formatter";

const Cart = () => {
  const { items, addItem, removeItem, cartTotal } = useContext(CartContext);
  const { showCheckOut, hideCart, progress } = useContext(UserProgressContext);

  // const cartTotal = items.reduce((totalPrice, item) => {
  //   return totalPrice + item.quantity * item.price;
  // }, 0);

  function handleHideCart() {
    hideCart();
  }

  function HandleShowCheckout() {
    showCheckOut();
  }

  return (
    <Modal
      className="cart"
      open={progress === "cart"}
      onClose={progress === "cart" ? handleHideCart : null}
    >
      <h2>Your cart</h2>
      <ul>
        {items.map((meal) => (
          <CartItem
            key={meal.id}
            name={meal.name}
            quantity={meal.quantity}
            price={meal.price}
            onIncrease={() => {
              addItem(meal);
            }}
            onDecrease={() => {
              removeItem(meal.id);
            }}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleHideCart}>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={HandleShowCheckout}>Checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
