import Head from "../shopElements/head";
import PanierVide from "../newShop/panierVide"
import Footer from "../elements/footer";
import PanierPlein from "../newShop/panierPlein";
import { useBasket } from "../context/basketContext";
function Panier() {
  const basket = useBasket();
  return (
      <div style={{ overflowX: "hidden" , backgroundColor:"#f3f3f3"}}>
      <Head type="shop" />
      {basket === 0 ? <PanierVide/> : <PanierPlein/>}
      <Footer/>
    </div>
  )
}
export default Panier