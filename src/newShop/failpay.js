import React, {useEffect} from 'react'
import "./payement.css"
function Failpay() {
      useEffect(()=>{
            setTimeout(() => {
                  window.location.replace(process.env.REACT_APP_BACKEND_URL2 +"panier")
            }, 4000);
      },[])
  return (
      <div>
          <div className="fail">Failed</div>
          <div className="echecIcon">⛔</div>
          <div className="explicationfail">There is a payment error !</div>
          <div className="explicationfail">You must enter valid bank credentials please</div>
          <div className="explicationfail">Your order has not been sent</div>
          

    </div>
  )
}

export default Failpay