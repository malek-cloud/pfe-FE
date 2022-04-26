import "./products.css";
import { Link } from "react-router-dom";
import { useState, useEffect,createContext, useContext } from "react";
import BuyModal from "./buyModal";
import axios from "axios";

/* export const productIdContext = createContext({
  productId: null,
  getProductId: () => {},
});
export const idContext = createContext();
export const idUpdateContext = createContext();
export function useId(){
  return useContext(idContext)
}
export function useIdUpdate(){
  return useContext(idUpdateContext)
}
export function BasketProvider({children}){
  const [idc, setId] = useState([]);

  function getId(){
    setId("");
  }
  return(
        <idContext.Provider value={idc}>
              <idUpdateContext.Provider value={getId}>
              {children}
              </idUpdateContext.Provider>
        </idContext.Provider>
  )
} */
function Product(props) {
  const [loader, setLoader] = useState([]);
  const [product, setProduct] = useState([]);

  /* useEffect(() => {
    axios({
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + `shop/Product/${props.id}`,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((resp) => {
      setProduct(resp.data.product);
      setLoader(false);
    });
  }, []); */
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="product">
    <img className="imageProduct" src={props.image}  alt="" />
      <Link to={`/shop/detail/Produit/${props.id}`} className="nameProduct" >
        {props.name}
      </Link>
      <div className="priceProduct"> {props.price} DT </div>
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
           item={props.item}
          price={props.price}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />{" "}
      </div>
    </div>
  );
}
export default Product;
