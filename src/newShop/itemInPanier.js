import Quantity from "./quantity";
import React, {useState} from "react";
import { useDeleteItem } from "../context/cardContext";

function ItemInPanier(props) {
  const deleteItem = useDeleteItem();

  const [quantity, setQuantity] = useState(props.element.quantity);

  function del() {
    deleteItem(props.element);
  }


  return (
    <div  className={"produitPanier"}>
      <img
        className="imageProduitPanier"
        src="/images/kitIOT.png"
        alt="produit"
      />
      <div className="donneeProduitPanier">
        <div className="titreProduitPanier"> {props.element && props.element.name}</div>
        <div className="prixProduitPanier">{props.element && props.element.price} DT x {quantity} = {props.element && props.element.price*quantity} DT</div>
      </div>
      <div className="quantiteProduitPanier">
        <Quantity quantity={quantity} setQuantity={setQuantity} inPanier={true} item={props.element} />
      </div>
      <div className="deleteProductPanier" onClick={del}>
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
  );
}

export default ItemInPanier;
