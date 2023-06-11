import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import MyAccount from "./pages/MyAccount";
import LostPassword from "./pages/LostPassword";
import NoPage from "./pages/NoPage";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  
          <Route path="shop" element={<Shop />} />
          <Route path="singleProduct/:productId" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="lost-password" element={<LostPassword />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;