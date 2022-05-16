import React from 'react'
import "./order.css"
import axios from "axios";

function PayerAvec() {
      const flouci = async () => {
            const url="https://developers.flouci.com/api/generate_payment";
            const payload={
              "app_token": "e5c307d5-0b86-4a58-81f5-a5b554b9bd3a",
              "app_secret": "872bce8e-574e-4a62-a950-04f1952f9bf9",
              "accept_card":"true",
              "amount":"100",
              "success_link": "http://localhost:3000/shop",
              "fail_link": "http://localhost:3000/panier",
              "session_timeout_secs": 1200,
              "developer_tracking_id": "84af679f-2494-46be-8138-90c245196292"
            }
            const headers = {
              'Content-Type': 'application/json'
            }
            try {
              const resp = await axios.post( url, payload, {'Content-Type': 'application/json' , 'Accept':"*/*"})
          
              console.log(resp.data);
          } catch (err) {
              // Handle Error Here
              console.error(err);
          }
            }
  return (
    <div style={{marginLeft:"20px"}}>
          <div className="ChoosePayWith">
                Payer Avec : 
          </div>
          <div className="paymentMethods">
                <div className="payMethod">Paymee</div>
                <div className="payMethod" onClick={flouci}>Flouci</div>
                <div className="payMethod">D17</div>
          </div>
    </div>
  )
}

export default PayerAvec