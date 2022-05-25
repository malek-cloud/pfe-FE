import React from "react";
import "./panier.css";
import { Link } from "react-router-dom";
import { useCardItems, useTotal } from "../context/cardContext";
import ItemInPanier from "./itemInPanier";
function PanierPlein() {
  const cardItems = useCardItems();
  const total = useTotal();

  return (
    <div className="panierCenter">
      <div className="titrePanierPlein">Summary of your basket</div>
      <div className="panierPlein">
        <div>
        <div className="productsPanierListe">
          {cardItems.map((element, index) => {
            
            return <ItemInPanier element={element} key={index}  />;
          })}
        </div>

        <Link to="/shop" className="goBackToShop" style={{marginLeft : "40px"}}>
          <div className="goBackArrow">&lt;</div>
          <div className="continueAchat">Continue shopping</div>
        </Link>
        </div>
      
      <div className="rightSidePanier">
        <div className="Commande">
          <div className="totalProduitPrix">
            <div className="totalProduit">Items Price</div>
            <div className="totalPrixProduit">{total} DT</div>
          </div>
          <div className="totalProduitPrix">
            <div className="totalProduit">Delivery</div>
            <div className="totalPrixProduit">6DT</div>
          </div>
          <div className="seperateLineTotal"> </div>
          <div className="totalProduitPrix">
            <div className="totalcount">Total</div>
            <div className="totalPrix">{total + 6} DT</div>
          </div>
          <Link to="/account" className="validateCommande">
          Validate your order
          </Link>
        </div>
        <div className="questionCommande">
        A question ? Contact us on 25 801 660
        </div>
        <div className="avantageCommande">
          <div className="livraison">
            💸 Delivery costs depends on the city (min 3DT)
          </div>
          <div className="livraison">🚐 Delivery all over Tunisia</div>
          <div className="livraison">
            💳 Payment on site or by credit card
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PanierPlein;
