import './App.css';
import React from 'react'
import { Container } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, } from "react-router-dom";

//component
import UserProfile from './components/UserProfile'
import NavbarComp from './components/NavbarComp'
import Marketplace from './components/Marketplace'
import Product from './components/Product'



function App() {
  return (
    <div >
      <NavbarComp />
      <Container style={{ width: 1200 }}>
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="product" element={<Product />} />
        </Routes>
      </Container>
    </div>

  );
}

export default App;
