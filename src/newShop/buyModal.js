import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import Quantity from "./quantity";
import "./products.css";
import { useBasketUpdate } from "../context/basketContext";
import { useCardUpdate  } from "../context/cardContext";

function BuyModal(props) {
 

  const [quantity, setQuantity] = useState(1);
  const updateBasket = useBasketUpdate();
  const updateCard = useCardUpdate();
  function addToPanel() {
    console.log(quantity + " hedhy quantity that should be added to basket")
    updateBasket(quantity); //add quantity to basket in basket context
    updateCard(props.item, quantity)
    props.onHide()
  }
  return (
    <React.Fragment>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        onHide={props.onHide}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{ textAlign: "center" }}>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>Ajouter Au Panier</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-2">
            <div className="col-md-5">
              <img className="imagePanier" src={props.image} alt="" />
            </div>
            <div className="col-md-5 mt-4">
              <div className="nameProductModal"> {props.name} </div>
              <div className="horline"></div>
              <Quantity setQuantity={setQuantity} quantity={quantity} />
              <div className="total">
                <div className="prix">Prix total : </div>
                <div className="totalPrice">{props.price * quantity + " DT"}</div>
              </div>

              <div className="horline"></div>
              <div className="livraison">
                💸Frais de livraison depend du ville (min 3DT)
              </div>
              <div className="livraison">🚐 Livraison sur toute la Tunisie</div>
              <div className="livraison">
                💳 Paiement sur place ou par carte bancaire
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={props.onHide}
            style={{ backgroundColor: "rgba(49, 3, 68, 255)", color: "white" }}
          >
            ⬅ Annuler
          </Button>
          <Button
            className="btn grow mx-2"
            style={{ backgroundColor: "rgba(49, 3, 68, 255)", color: "white" }}
            onClick={addToPanel}
          >
            Ajouter au panier ✔️
          </Button>
         
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default BuyModal;
