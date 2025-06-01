import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
     

        <div>
          <h2 className="text-xl font-bold mb-4">WAMU</h2>
          <p className="text-sm text-gray-300">
            Voyagez avec confort et sécurité à travers tout le pays.
          </p>
        </div>

   

        <div>
          <h3 className="text-lg font-semibold mb-3">Liens</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-white">Accueil</a></li>
            <li><NavLink to="reservations" className="hover:text-white">Horaires</NavLink></li>
            <li><NavLink to="reservations" className="hover:text-white">Réservations</NavLink></li>
            <li><NavLink to="info" className="hover:text-white">Contact</NavLink></li>
        
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">Email: eeeeee@ee.com</p>
          <p className="text-gray-400 text-sm">Téléphone: +212 123467</p>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-3">Suivez-nous</h3>
          <div className="flex gap-4 text-xl text-gray-400">
            <a href="#"><FaFacebook className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
          </div>
        </div>
      </div>

     
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} WAMU. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
