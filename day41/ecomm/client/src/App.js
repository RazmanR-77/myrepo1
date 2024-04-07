import React from 'react';
import './App.css'
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/page/HomeZul';
import CustomItemContext from './context/ItemContext';

const App = () => {
  return (
    <div className="App">
      <CustomItemContext>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </CustomItemContext>

    </div>
  );
};

export default App;