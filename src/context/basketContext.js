import React, {useContext, useState } from 'react'
export const basketContext = React.createContext();
export const updateBasketContext = React.createContext();
export function useBasket(){
      return useContext(basketContext)
}
export function useBasketUpdate(){
      return useContext(updateBasketContext)
}
export function BasketProvider({children}){
      const [basketnum, setBasketnum] =useState(0)
      function addToBasket(e){
        setBasketnum(basketnum + e);
      }
      return(
            <basketContext.Provider value={basketnum}>
                  <updateBasketContext.Provider value={addToBasket}>
                  {children}
                  </updateBasketContext.Provider>
            </basketContext.Provider>
      )
}