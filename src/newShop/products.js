import Product from "./product";
import axios from "axios";
import "../styles/header.css";
import Snackbar from "@mui/material/Snackbar";
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from "react";
import { useBasket } from "../context/basketContext";
import { Link } from "react-router-dom";
function Products(props) {
  const [shop, setShop] = useState([]);
  const [loader, setLoader] = useState([]);
  const basket = useBasket();
  const [state, setState] = useState(false);
 
  const handleClose = () => {
    setState(false);
  };
  useEffect(()=>{
    if(basket > 0){
      setState(true);
    }

  },[basket])
    useEffect(() => {
            axios({
              method: "get",
              url: process.env.REACT_APP_BACKEND_URL + "shop/Products",
              headers: { "Content-Type": "multipart/form-data" },
            }).then((resp) => {
              setShop(resp.data.products);
              setLoader(false);
            });
          }, []);
  return (
    <div>
      <div className="inlinePanel">
        <div className="catName">{props.category} </div>
        <Link to="/panier" className="chariot">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="black"
            className="bi bi-basket3 "
            viewBox="0 0 16 16"
          >
            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
          </svg>
          <div className="badgeShop">{basket}</div>
          <div className="panier">Panier</div>
        </Link>
      </div>
      <div className="products">
          {loader ? (
            <div className="spinner-border" role="status"></div>
          ) : (
            shop.map((item) =>
              item.category === props.category ? (
                <Product
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  item={item}
                  description={item.description}
                  price={item.price}
                  category={item.category}
                  image={
                    process.env.REACT_APP_BACKEND_URL + `${item.images[0]}`
                  }
                />
              ) :""
                )
          )}
      </div>
      <Snackbar
            anchorOrigin={{ vertical:'bottom', horizontal:'center' }}
            open={state}
            autoHideDuration={6000}
            onClose={handleClose}
            message= {<span>Produit Ajouter Au Panier Avec Succès</span>}
            action = {[<IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>x</IconButton>]}
          />
    </div>
  );
}
export default Products;
