// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './header/navbar';
import Home from './pages/page1/home.jsx';
import Footer from './pages/page1/footer.jsx';
import Compte from './pages/Compte/compte.jsx';
import Validation from './validation.jsx';
import Offres from './pages/page1/offres.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/compte' element={<Compte />} />
          <Route path="/validation" element={<Validation />} />
          <Route path="/Offres" element={<Offres />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
