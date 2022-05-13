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
      <div className="titrePanierPlein">Récapitulatif de votre panier</div>
      <div className="panierPlein">
        <div>
        <div className="productsPanierListe">
          {cardItems.map((element, index) => {
            
            return <ItemInPanier element={element} key={index}  />;
          })}
        </div>

        <Link to="/shop" className="goBackToShop" style={{marginLeft : "40px"}}>
          <div className="goBackArrow">&lt;</div>
          <div className="continueAchat">Continuez vos achats</div>
        </Link>
        </div>
      
      <div className="rightSidePanier">
        <div className="Commande">
          <div className="totalProduitPrix">
            <div className="totalProduit">Articles</div>
            <div className="totalPrixProduit">{total} DT</div>
          </div>
          <div className="totalProduitPrix">
            <div className="totalProduit">Livraison</div>
            <div className="totalPrixProduit">6DT</div>
          </div>
          <div className="seperateLineTotal"> </div>
          <div className="totalProduitPrix">
            <div className="totalcount">Total</div>
            <div className="totalPrix">{total + 6} DT</div>
          </div>
          <Link to="/account" className="validateCommande">
            Valider votre commande
          </Link>
        </div>
        <div className="questionCommande">
          Une question ? Contactez-nous au 25 801 660
        </div>
        <div className="avantageCommande">
          <div className="livraison">
            💸 Frais de livraison depend du ville (min 3DT)
          </div>
          <div className="livraison">🚐 Livraison sur toute la Tunisie</div>
          <div className="livraison">
            💳 Paiement sur place ou par carte bancaire
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PanierPlein;
