import React, { useContext, useState } from "react";
export const productContext = React.createContext();
export const updateProductContext = React.createContext();
export const deleteItemContext = React.createContext();
export function useCardItems() {
  return useContext(productContext);
}
export function useCardUpdate() {
  return useContext(updateProductContext);
}
export function useDeleteItem() {
  return useContext(deleteItemContext);
}
export function CardItemsProvider({ children }) {
  const [productsInCard, addCard] = useState([]);
  function addToCard(e) {
    addCard([...productsInCard, e]);
  }
  function removeFromCard(e) {
    let arr = [ ...productsInCard];
    const index = arr.indexOf(e)
    if (index > -1) {
      arr.splice(index, 1); // 2nd parameter means remove one item only
    }
    addCard(arr);
    console.log("deleted item " + productsInCard )

  }
  return (
    <productContext.Provider value={productsInCard}>
      <updateProductContext.Provider value={addToCard}>
        <deleteItemContext.Provider value={removeFromCard}>
          {children}
        </deleteItemContext.Provider>
      </updateProductContext.Provider>
    </productContext.Provider>
  );
}
