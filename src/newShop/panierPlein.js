import React, {useState} from "react";
import "./panier.css";
import { Link } from "react-router-dom";
import Quantity from "./quantity";
function PanierPlein() {
  const [remove, setRemove] = useState("produitPanier")
  const [remove1, setRemove1] = useState("produitPanier")
  const [remove2, setRemove2] = useState("produitPanier")
  const removeFromPanier = ()=>{
    setRemove("produitPanierRemoved");
  }
   const removeFromPanier1 = ()=>{
    setRemove1("produitPanierRemoved");
  } 
  const removeFromPanier2 = ()=>{
    setRemove2("produitPanierRemoved");
  } 
  return (
    <div className="panierCenter">
      <div className="titrePanierPlein">Récapitulatif de votre panier</div>
      <div className="panierPlein">
        <div className="productsPanierListe">
      <div onClick={removeFromPanier} className={remove}>
            <img
              className="imageProduitPanier"
              src="/images/kitIOT.png"
              alt="produit"
            />
            <div className="donneeProduitPanier">
              <div className="titreProduitPanier">KIT Robotique</div>
              <div className="prixProduitPanier">99DT</div>
            </div>
            <div className="quantiteProduitPanier">
              <Quantity quantity={"1"} />
            </div>
            <div className="deleteProductPanier">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </div>
          </div>
          <div onClick={removeFromPanier1} className={remove1}>
            <img
              className="imageProduitPanier"
              src="/images/kitIOT.png"
              alt="produit"
            />
            <div className="donneeProduitPanier">
              <div className="titreProduitPanier">KIT arduino</div>
              <div className="prixProduitPanier">99DT</div>
            </div>
            <div className="quantiteProduitPanier">
              <Quantity quantity={"1"} />
            </div>
            <div className="deleteProductPanier">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </div>
          </div>
         <div onClick={removeFromPanier2} className={remove2}>
            <img
              className="imageProduitPanier"
              src="/images/kitIOT.png"
              alt="produit"
            />
            <div className="donneeProduitPanier">
              <div className="titreProduitPanier">KIT IOT</div>
              <div className="prixProduitPanier">99DT</div>
            </div>
            <div className="quantiteProduitPanier">
              <Quantity quantity={"1"} />
            </div>
            <div className="deleteProductPanier">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </div>
          </div>
    
          <Link to="/shop" className="goBackToShop">
            <div className="goBackArrow">&lt;</div>
            <div className="continueAchat">Continuez vos achats</div>
          </Link>
        </div>
        <div className="rightSidePanier">
          <div className="Commande">
            <div className="totalProduitPrix">
              <div className="totalProduit">Articles</div>
              <div className="totalPrixProduit">180DT</div>
            </div>
            <div className="totalProduitPrix">
              <div className="totalProduit">Livraison</div>
              <div className="totalPrixProduit">6DT</div>
            </div>
            <div className="seperateLineTotal"> </div>
            <div className="totalProduitPrix">
              <div className="totalcount">Total</div>
              <div className="totalPrix">186DT</div>
            </div>
            <Link to="/account" className="validateCommande">Valider votre commande</Link>
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
