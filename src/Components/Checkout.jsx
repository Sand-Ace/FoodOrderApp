import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { currencyFormatter } from "../utils/formatter";

import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../Hooks/useHttp";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const Checkout = () => {
  const { cartTotal, items } = useContext(CartContext);
  const { progress, hideCheckOut } = useContext(UserProgressContext);

  const { data, isLoading, error, sendRequest } = useHttp(
    "http://localhost:3000/orders",
    requestConfig
  );

  function handleCloseCheckOut() {
    hideCheckOut();
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest({
      order: {
        items: items,
        customer: customerData,
      },
    });

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: items,
          customer: customerData,
        },
      }),
    });
  }

  return (
    <Modal open={progress === "checkout"} onClose={handleCloseCheckOut}>
      <form onSubmit={handleFormSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        {/* <Input label="Phone Number" type="number" id="number" /> */}
        <div className="control-row">
          <Input label="Postal Code" type="text" id="Postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleCloseCheckOut}>
            Close
          </Button>
          <Button type="submit">Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
