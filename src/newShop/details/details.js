import "./details.css";
import { Link } from "react-router-dom";
import React from "react";
import Product from "../product";
import "../products.css";
import axios from "axios";
import { BiChevronsLeft } from "react-icons/bi";
import { useState, useEffect } from "react";
import Quantity from "../quantity";
import {useBasketUpdate} from "../../context/basketContext"
function Details(props) {
  const [product, setProduct] = useState();
  const [loader, setLoader] = useState();
  const updateBasket = useBasketUpdate();

  /*useEffect(() => {
    axios({
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + `shop/Product/${props.id}`,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((resp) => {
      setProduct(resp.data.product);
      console.log(product)
      console.log(props.id)
      setLoader(false);
    });
  }, []);*/
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
          <img
            className="imageProductDetail"
            /*src= {process.env.REACT_APP_BACKEND_URL + `${product.images[0]}`}*/ src="/images/kitIOT.png"
            alt=""
          />
        </div>
        <div className="col-md-7">
          <div className="detailsPage ">
            <div id="ijou">
              <div className="nameProductDetail">kit IOT </div>
              <div className="priceDetails">99DT</div>
            </div>
            <div className="detailProductDetail"> Details :</div>
            <div className="detailProductDetailParagraphe">
              
              The kit comes with all the necessary hardware for up to two
              students, including one MKR WiFi 1010 board, an MKR IoT carrier
              with five tactile buttons and LCD display, a set of sensors and
              actuators, cables and a battery holder. All components are packed
              into a robust reusable toolbox, ideal for storage and years of
              use.
            </div>
            <div className="addTotalprice">
              <div className="quantiteDetail">
                <Quantity setQuantity={setQuantity} quantity={quantity} />
              </div>
              <div className="totalDetail">
                <div className="totalPriceD">
                  Prix total : {99 * quantity + "DT"}
                </div>
              </div>
            </div>
              <div className="ajoutPanier" onClick={()=>{updateBasket(quantity)}}>Ajouter au panier</div>
            
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
