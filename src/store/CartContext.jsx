import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducerFunction(state, action) {
  if (action.type === "ADD") {
    //  do something
    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // add garna lako item = existingItem
    const updatedItems = [...state.items];

    if (existingCartIndex !== -1) {
      const existingItem = state.items[existingCartIndex];

      // nmaking new item with updated quantity
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE") {
    // do something
    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartIndex, 1);
    } else {
      // new item with old item information
      const updateditem = {
        ...existingCartItem,
        quantity: existingCartItem - 1,
      };

      updatedItems[existingCartIndex] = updateditem;
    }

    return { ...state, items: updatedItems };
  }
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducerFunction, {
    items: [],
  });

  function addItem(item) {
    dispatchCartAction({ type: "ADD", item: item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE", id: id });
  }

  const cartContextValue = {
    items: cart.items,
    addItem: addItem,
    removeItem: removeItem,
  };

  console.log(cartContextValue);

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
