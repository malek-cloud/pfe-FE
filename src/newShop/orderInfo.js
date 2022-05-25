import React, {useState} from "react";
import "./order.css";
import PayerAvec from "./payerAvec";
function OrderInfo() {
  const [card, setCard]= useState(false)
  function payWithCard(){
    setCard(true)
  }
 
  return (
    <div className="orderInfo">
      <div className="titleBetweenLines">
        <div className="lineOne"></div>
        <div className="middleTitle">Validate the Order</div>
        <div className="lineOne"></div>
      </div>
      <div className="addressPart">
        <div className="adressTitle">Adress</div>
        <div className="sepVertLine"> </div>
        <div className="orderBlocAdresse">
          <div className="orderLabel">Region : </div>
          <input
            type="text"
            placeholder="Bizerte / Sfax / Le Kef / Jendouba / Sousse / Tunis ...."
            className="inputRegion"
          />
          <div className="orderLabel">City : </div>
          <input
            type="text"
            placeholder="Enter your current city ...."
            className="inputRegion"
          />
          <div className="orderLabel">Adress * : </div>
          <textarea
            className="textAreaAdress"
            name=""
            id=""
            cols="60"
            rows="4"
            placeholder="Road / Apartment / Building / Suite / Bloc ..."
          ></textarea>
        </div>
      </div>
      <div className="payPart">
        <div className="adressTitle" style={{padding:"1vh 1.2vw"}}>Payment</div>
        <div className="sepVertLine" style={{height : "12vh"}}> </div>
        <form className="paymentRadio">
          <div>
          <input type="radio" id="cash" name="pay" onClick={()=>{setCard(false)}}/>
          <label htmlFor="cash" className="radioLabel"> Cash payment on delivery</label>
          </div>
          <div onClick={payWithCard}>
          <input type="radio" id="cart" name="pay"  />
          <label htmlFor="cart" className="radioLabel">Payment With Credit Card</label>
          </div>
        </form>
      </div>
      { card ? <PayerAvec/> : <div className="endOrder"> Validate </div>}

    </div>
  );
}

export default OrderInfo;
