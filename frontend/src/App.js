import './App.css';
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

//component
import UserProfile from './components/UserProfile'
import NavbarComp from './components/NavbarComp'
import Marketplace from './components/Marketplace'
import Product from './components/Product'
import Login from './components/Login'
import MyProduct from './components/MyProduct'
import AddProduct from './components/AddProduct'
import ModifyProduct from './components/ModifyProduct'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import Signup from './components/Signup'
import EditProfile from './components/EditProfile'
import Payment from './components/Payment'

import axios from 'axios';



function App() {


  useEffect(() => {
    StoreCookie()
  }, [])

  const StoreCookie = async () => {
    await axios.get("auth/getcookie")
      .then(res => {
        localStorage.setItem("token", res.data)
        console.log("object")

      })
      .catch(() => localStorage.setItem("token", ''))

  }


  return (
    <div >
      <NavbarComp />

      <Container style={{ width: 1200 }}>
        <Routes >
          <Route path="/" element={<Marketplace />} />
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="product/:product_id_params" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="myproduct" element={<MyProduct />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="modifyproduct/:product_id_params" element={<ModifyProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="list" element={<ProductList />} />
          <Route path="signup" element={<Signup />} />
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="payment/:transaction_id_params" element={<Payment />} />
        </Routes>
      </Container>
    </div>

  );
}

export default App;
