
import Home from "./pages/home";
import NewServices from "./pages/newServices";
import AboutUs from "./pages/aboutus";
import Shop from "./pages/newShop";
import Education from "./pages/education";
import ContactUs from "./pages/contactus";
import ProductDetail from "./pages/productShopDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { BasketProvider } from "./context/basketContext";
import { CardItemsProvider } from "./context/cardContext";
import { FormationCategoryProvider } from "./context/formationCategory";
import Panier from "./pages/panier";
import { useLogin } from "./hooks/loginHook";
import SignPage from "./pages/signPage";
import {AuthContext} from "./context/loginContext"
export default function App() {
  const { token, login, logout, userId, userName } = useLogin();
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        userName : userName,
        login: login,
        logout: logout,
      }}
    >
      <BasketProvider>
        <CardItemsProvider>
        <FormationCategoryProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<NewServices />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/learn" element={<Education />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/panier" element={<Panier />} />
              <Route path="/account" element={<SignPage />} />
              <Route
                path={`/shop/detail/produit/:id`}
                element={<ProductDetail  />}
              />
            </Routes>
          </BrowserRouter>
        </FormationCategoryProvider>
        </CardItemsProvider>
      </BasketProvider>
    </AuthContext.Provider>
  );
}