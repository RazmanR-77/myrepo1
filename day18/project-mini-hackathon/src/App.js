import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSora from "./HomeSora";
import NavbarSora from "./NavbarSora";
import Contact from "./contactAlex";
import Footer from "./footerAlex";
import Products from "./ProductsRazmanR";
import SupportPage from "./services_william";

function App() {
  return (
    <div>
      <Router>
        <NavbarSora />
        <Routes>
          <Route path='/' element ={<HomeSora />}/>
          <Route path='/ProductsRazmanR' element ={<Products/>}/>
          <Route path='/ContactAlex' element ={<Contact/>}/>
          <Route path='/services_william' element ={<SupportPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
