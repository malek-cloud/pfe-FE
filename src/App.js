import Home from "./pages/home";
import NewServices from "./pages/newServices";
import AboutUs from "./pages/aboutus";
import Shop from "./pages/newShop";
import Education from "./pages/education";
import ContactUs from "./pages/contactus";
import ProductDetail from "./pages/productShopDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BasketProvider } from "./context/basketContext";
import { FcbggleProvider } from "./context/fcbGgle";
import { CardItemsProvider } from "./context/cardContext";
import Panier from "./pages/panier";
import Succespay from "./newShop/succespay";
import Failpay from "./newShop/failpay";
import SignPage from "./pages/signPage";
import { AuthProvider } from "./context/loginContext";

export default function App() {

  return (
    <BrowserRouter basename="/">
    <AuthProvider>
    <BasketProvider>
          <CardItemsProvider>
            <FcbggleProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<NewServices />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/learn" element={<Education />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/panier" element={<Panier />} />
              <Route path="/succes" element={<Succespay />} />
              <Route path="/fail" element={<Failpay />} />
              <Route path="/account" element={<SignPage />} />
              <Route
                path={`/shop/detail/produit/:id`}
                element={<ProductDetail />}
              />
            </Routes>
            </FcbggleProvider>
          </CardItemsProvider>
        </BasketProvider>
    </AuthProvider>
    </BrowserRouter>
  );
}
