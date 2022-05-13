import React, { useContext, useState } from "react";
import { useRemoveBasket } from "./basketContext";
export const productContext = React.createContext();
export const updateProductContext = React.createContext();
export const deleteItemContext = React.createContext();
export const totalContext = React.createContext();
export const messageContext = React.createContext();
export const changeContext = React.createContext();
export function useCardItems() {
  return useContext(productContext);
}
export function useTotal() {
  return useContext(totalContext);
}
export function useCardUpdate() {
  return useContext(updateProductContext);
}
export function useDeleteItem() {
  return useContext(deleteItemContext);
}
export function useSnackBarMessage() {
  return useContext(messageContext);
}export function useBasketChange() {
  return useContext(changeContext);
}
export function CardItemsProvider({ children }) {
  const [productsInCard, addCard] = useState([]);
  const [total, setTotal] = useState(0);
  const [basketChanging, setBasketChanging] = useState(false);
  const [message, setMessage] = useState("");
  const deleteFromBasket = useRemoveBasket();
  function AddToCard(e, n) {
    setBasketChanging(true)

    console.log(n);
    if (productsInCard.find((x) => x.name === e.name)) {
      addCard(
        productsInCard.map((elem) =>
          elem.name === e.name
            ? {
                ...elem,
                quantity: elem.quantity + n,
              }
            : elem
        )
      );
    } else {
      e["quantity"] = n;
      addCard([...productsInCard, e]);
     
      console.log("list with new item : " + productsInCard);
    }
   if(n){
    setTotal(total + e.price*n);
   }else{
    setTotal(total + e.price);
   }
   setMessage("Ajouter Au Panier Avec Succès ✔")
   setTimeout(function() {
    setBasketChanging(false)
  }, 1000);
   

  }

  function removeFromCard(e, n) {
    setBasketChanging(true)
   setMessage("Produit retiré Du Panier 🗑")

    if (n) {
      if (productsInCard.find((x) => x.name === e.name)) {
        addCard(
          productsInCard.map((elem) =>
            elem.name === e.name
              ? {
                  ...elem,
                  quantity: elem.quantity - n,
                }
              : elem
          )
        );
      }
      setTotal(total - e.price*n);
    } else {
      let arr = [...productsInCard];
      const index = arr.indexOf(e);
      console.log(
        productsInCard[index].quantity + " quantity of deleted product");
        setTotal(total - e.price*productsInCard[index].quantity);
      
      deleteFromBasket(productsInCard[index].quantity);
      if (index > -1) {
        arr.splice(index, 1); // 2nd parameter means remove one item only
      }
      addCard(arr);
      console.log("deleted item " + productsInCard);
    }
  
  
    setTimeout(function() {
      setBasketChanging(false)
    }, 1000);
  }

  
  return (
    <updateProductContext.Provider value={AddToCard}>
      <deleteItemContext.Provider value={removeFromCard}>
        <productContext.Provider value={productsInCard}>
            <totalContext.Provider value={total}>
            <messageContext.Provider value={message}>
            <changeContext.Provider value={basketChanging}>
              {children}
            </changeContext.Provider>
            </messageContext.Provider>
            </totalContext.Provider>
        </productContext.Provider>
      </deleteItemContext.Provider>
    </updateProductContext.Provider>
  );
}
