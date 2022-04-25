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
        <div className="middleTitle">Finaliser La Commande</div>
        <div className="lineOne"></div>
      </div>
      <div className="addressPart">
        <div className="adressTitle">Adresse</div>
        <div className="sepVertLine"> </div>
        <div className="orderBlocAdresse">
          <div className="orderLabel">Région : </div>
          <input
            type="text"
            placeholder="Bizerte / Sfax / Le Kef / Jendouba / Sousse / Tunis ...."
            className="inputRegion"
          />
          <div className="orderLabel">Ville : </div>
          <input
            type="text"
            placeholder="Saisir votre ville actuelle ...."
            className="inputRegion"
          />
          <div className="orderLabel">Adresse * : </div>
          <textarea
            className="textAreaAdress"
            name=""
            id=""
            cols="60"
            rows="4"
            placeholder="Rue / Appartement / Batiment / Suite / Bloc ..."
          ></textarea>
        </div>
      </div>
      <div className="payPart">
        <div className="adressTitle" style={{padding:"1vh 1.2vw"}}>Paiement</div>
        <div className="sepVertLine" style={{height : "12vh"}}> </div>
        <form className="paymentRadio">
          <div>
          <input type="radio" id="cash" name="pay" onClick={()=>{setCard(false)}}/>
          <label htmlFor="cash" className="radioLabel"> Paiement CASH à la livraison</label>
          </div>
          <div onClick={payWithCard}>
          <input type="radio" id="cart" name="pay"  />
          <label htmlFor="cart" className="radioLabel">Paiement Avec Carte Electronique</label>
          </div>
        </form>
      </div>
      { card ? <PayerAvec/> : <div className="endOrder"> Valider </div>}

    </div>
  );
}

export default OrderInfo;
