import React from "react";
import "./panier.css";
import { Link } from "react-router-dom";
function Panier() {
  return (
    <div className="panierPage">
      <div className="vide">
        <div className="textPanier">
          YOUR BASKET IS UNFORTUNATELY <b>EMPTY</b>
        </div>
        <img
          className="imagechariot"
          src="/images/paniervide.png"
          alt="chariot"
        />
        <div className="goShop">
          Do you want to discover our articles ?
          <Link className="buttonGoShop" to="/shop">
            Yes{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Panier;
