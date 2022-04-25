import React from 'react'
import PersoInfo from "./persoInfo"
import OrderInfo from './orderInfo'
import Footer from "../elements/footer"
import "./order.css"
function EndOrder() {
  return (
    <div >
         <div className="endOrderPageElements">
         <PersoInfo/>
          <OrderInfo/>
         </div>
         <Footer/>
    </div>
  )
}

export default EndOrder