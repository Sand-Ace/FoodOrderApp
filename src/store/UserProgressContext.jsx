import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "", // 'cart or 'checkout
  showCart: () => {},
  hideCart: () => {},
  showCheckOut: () => {},
  hideCheckOut: () => {},
});

export const UserProgressContextProvider = ({ children }) => {
  const [userProgress, setuserProgress] = useState("");

  function showCart() {
    setuserProgress("cart");
  }

  function hideCart() {
    setuserProgress("");
  }

  function showCheckOut() {
    setuserProgress("checkout");
  }

  function hideCheckOut() {
    setuserProgress("");
  }

  const userProgressCtxValue = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckOut,
    hideCheckOut,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtxValue}>
      {children}
    </UserProgressContext.Provider>
  );
};

export default UserProgressContext;
