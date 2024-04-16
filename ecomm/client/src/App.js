import React from 'react';
import './App.css'
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/page/HomeZul';
import CustomItemContext from './context/ItemContext';
import CartDetails from './components/CartDetails';

const App = () => {
  return (
    <div className="App">
      <CustomItemContext>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartDetails />} />
          </Routes>
        </Router>
      </CustomItemContext>

    </div>
  );
};

export default App;