import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Faq from './components/FAQ/Faq';  
import Map from './components/Map/Map';  
import Authorization from './components/Authorization/Authorization';  

import 'typeface-montserrat';
import './App.scss'; // Создайте файл App.scss для стилей

const App = () => {
  return (
    <Router>
      <div>
        <Menu />

        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/Map" element={<Map />} />
            <Route path="/Authorization" element={<Authorization />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;


/*
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Map from './components/Map/Map';
*/