import React, {useEffect} from 'react'
import "./payement.css"
function Succespay() {
      useEffect(()=>{
            setTimeout(() => {
                  window.location.replace("http://localhost:3000/shop")
            }, 4000);
      },[])
  return (
    <div>
          <div className="succes">Success</div>
          <div className="explication">Your order has been successfully saved and sent</div>
          <div className="explication">The price has been subtracted from your bank account</div>
          <div className="thanks">Maker skills Up <br/> Thanks you for your trust</div>

    </div>
  )
}

export default Succespay