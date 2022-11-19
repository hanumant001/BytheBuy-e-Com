import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Payment from "./components/Payment";
import ProductComponent from "./components/ProductComponent";
import ProductDetail from "./components/ProductDetail";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
          Home
        </Route>
        <Route path='/products' element={<ProductComponent />}></Route>
        <Route path={`/products/:id`} element={<ProductDetail />}></Route>
        <Route path={`/cart`} element={<Cart />}></Route>
        <Route path={`/login`} element={<Register />}></Route>
        <Route path={`/checkout`} element={<Checkout />}></Route>
        <Route path={`/payment`} element={<Payment />}></Route>
      </Routes>
    </div>
  );
}

export default App;