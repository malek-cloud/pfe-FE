import "./products.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import BuyModal from "./buyModal";
function Product(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="product">
      <img className="imageProduct" src="/images/kitIOT.png" alt="" />
      <Link to={`/shop/detail/produit`} className="nameProduct" /*onClick={()=>{props.setId(props.id)}}*/>
        {" "}
        {props.name}{" "} kit iot
      </Link>
      <div className="priceProduct"> {props.price}99DT </div>
      <div className="stock">
        {" "}
        <div
          variant="primary"
          onClick={() => {
            setModalShow(true);
          }}
        >
          acheter
        </div>
        <BuyModal
          name={props.name}
          image={props.image}
          price={props.price}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />{" "}
      </div>
    </div>
  );
}
export default Product;
