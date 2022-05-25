import React, {useState} from "react";
import "./order.css";
import axios from "axios";
import  { Redirect } from 'react-router-dom'
function PayerAvec() {
  const [payUrl, setPayUrl] = useState("")
  const flouci = async () => {
    const url = process.env.REACT_APP_BACKEND_URL +"pay";
    try {
      const resp = await axios.get(url);
  console.log("this is the result"  + resp.data.link.link);
      setPayUrl(resp)
      console.log(payUrl);
      window.location.replace(resp.data.link.link)
    } catch (err) {
      // Handle Error Here
      console.error(err);
    } 
    /* const url = "https://sandbox.paymee.tn/api/v1/payments/create";
    const payload = {
      "vendor": 5020,
      "amount":120.5,
      "note": "kit iot",
    };
    try {
      const resp = await axios.post(url, {
            "vendor": 2307,
            "amount":100,
            "note": "kit iot",
      }, {
        "Authorization": "Token 53300cf53245c56b10bcbfb4ca09574cd9640107",
        "Content-Type": "application/json"

      });

      console.log(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    } */
  };
  
  return (
    <div style={{ marginLeft: "20px" }}>
      <div className="ChoosePayWith">Payer Avec :</div>
      <div className="paymentMethods">
        <div className="payMethod">Paymee</div>
        <div className="payMethod" onClick={flouci}>
          Flouci
        </div>
        <div className="payMethod">D17</div>
      </div>
    </div>
  );
}

export default PayerAvec;
