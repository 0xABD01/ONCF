// src/App.js
import React from 'react';
import Navbar from './header/navbar';
import Validation from './validation.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/page1/home.jsx';
import Footer from './pages/page1/footer.jsx';
import Compte from './pages/Compte/compte.jsx';
import MotDePasseOublie from './pages/Compte/mdpoublier.jsx';
import Shope from './pages/shope.jsx';
import APropos from './pages/information/info.jsx';
import Famille from './pages/offres/Famille.jsx';
import Navette from './pages/offres/Navette.jsx';
import Accessibilite from './pages/offres/Accessibilite.jsx';
import Abonnement from './pages/Abonnement/Abonnement.jsx';
import Offres from './pages/page1/offres.jsx';
import EarlyBooking from './pages/offres/EarlyBooking.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/compte' element={<Compte />} />
          <Route path='/compte/motdepasse-oublie' element={<MotDePasseOublie/>}/>
          <Route path="/validation" element={<Validation />} />
          <Route path="/shope" element={<Shope />} />
          <Route path="/info" element={<APropos />} />

          <Route path="/Offres/Famille" element={<Famille />} />
          <Route path="/Offres/Navette" element={<Navette />} />
          <Route path="/Offres/Accessibilité" element={<Accessibilite />} />
          <Route path="/abonnements" element={<Abonnement />} />
          <Route path="/Offres" element={<Offres />} />
          <Route path="/Offres/EarlyBooking" element={<EarlyBooking />} />
    
        </Routes>
        <Footer/>
      </>
    </BrowserRouter>
  );
};

export default App;
