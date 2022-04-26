import "./details.css";
import { Link, useParams } from "react-router-dom";
import React from "react";
import Product from "../product";
import "../products.css";
import axios from "axios";
import { BiChevronsLeft } from "react-icons/bi";
import { useState, useEffect } from "react";
import Quantity from "../quantity";
import {useBasketUpdate} from "../../context/basketContext"
import { useCardUpdate } from "../../context/cardContext";

function Details(props) {
  const updateCard = useCardUpdate();
  
  const { id } = useParams()
  const [product, setProduct] = useState();
  const [loader, setLoader] = useState(false);
  const updateBasket = useBasketUpdate();
  console.log("hedha el product")
  useEffect(() => {
    console.log(" el id mel params : " + id)
    console.log("useEffect work")
    axios({
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + `shop/Product/${id}`,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((resp) => {
      setLoader(true);
      if(resp.status === 200)
      {setProduct(resp.data.product);
      console.log(resp.data + "hedha el product")
      setLoader(false);}
      else{
        console.log("the status code in : " + resp.status)
      }
    });
  }, []);
  function addToPanel() {
    updateBasket(quantity);
    updateCard(product);
  }
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="detailProductPage">
      <div className="row">
        <div className="col-md-4">
          <Link to="/shop" className="returnButton">
            <BiChevronsLeft
              size="30px"
              style={{
                marginBottom: "3.5px",
                marginRight: "5px",
              }}
            />
            <span>Retour</span>
          </Link>
          { product && <img
            className="imageProductDetail"
            src= {process.env.REACT_APP_BACKEND_URL + `${product.images[0]}`} alt="detail"
          />  }
        </div>
        <div className="col-md-7">
          <div className="detailsPage ">
            <div id="ijou">
              <div className="nameProductDetail">{product && product.name}</div>
              <div className="priceDetails">{product && product.price} DT</div>
            </div>
            <div className="detailProductDetail"> Details :</div>
            <div className="detailProductDetailParagraphe">
              {product && product.description}
            </div>
            <div className="addTotalprice">
              <div className="quantiteDetail">
                <Quantity setQuantity={setQuantity} quantity={quantity} />
              </div>
              <div className="totalDetail">
                <div className="totalPriceD">
                  Prix total : {product && product.price * quantity + "DT"}
                </div>
              </div>
            </div>
              <div className="ajoutPanier" onClick={addToPanel}>Ajouter au panier</div>
            
          </div>
        </div>
      </div>
      <h1 className="related">Related Products</h1>
      <div className="gridrelatdproducts">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
export default Details;
