import React from 'react'
import "./panier.css"
import { Link } from "react-router-dom";
function Panier() {
  return (
      <div className='panierPage' >
      <div className="vide">
            <div className="textPanier">VOTRE PANIER EST MALHEUSEMENT <b>VIDE</b></div>
            <img className='imagechariot' src="/images/paniervide.png" alt="chariot" />
            <div className="goShop">
                  voulez vous découvrir nos articles ?
                 <Link className='buttonGoShop' to ="/shop">
                 Oui </Link>
            </div>
      </div>
    </div>
  )
}

export default Panier