import React, { useContext, useState } from "react";
import {useCardItems} from "./cardContext"
export const basketContext = React.createContext();
export const updateBasketContext = React.createContext();
export const removeBasketContext = React.createContext();

export function useBasket() {
  return useContext(basketContext);
}
export function useBasketUpdate() {
  return useContext(updateBasketContext);
}
export function useRemoveBasket() {
  return useContext(removeBasketContext);
}
export function BasketProvider({ children }) {
  const [basketnum, setBasketnum] = useState(0);
  function addToBasket(e) {
    setBasketnum(basketnum + e);

/* let i = 0;
    items && items.forEach((ele)=>{
      i = i + ele.quantity
    })
    setBasketnum(i) */
}
  function removeFromBasket(e) {
    setBasketnum(basketnum - e);
  /*  let i = 0;
    items && items.forEach((ele)=>{
      i = i + ele.quantity
    })
    setBasketnum(i) */
  }
  return (
    <basketContext.Provider value={basketnum}>
      <updateBasketContext.Provider value={addToBasket}>
        <removeBasketContext.Provider value={removeFromBasket}>
          {children}
        </removeBasketContext.Provider>
      </updateBasketContext.Provider>
    </basketContext.Provider>
  );
}
