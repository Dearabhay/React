import { useState } from "react";
import { MyShop } from "./MyShop";



export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <MyShop.Provider value={{ setCount, count }}>
      {children}
    </MyShop.Provider>
  );
};