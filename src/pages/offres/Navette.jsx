import React from 'react';
import { Link } from 'react-router-dom';

function Navette() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Offre Navette</h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          L'offre navette vous propose un service de transfert entre votre domicile et la gare, pour un voyage sans stress.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Service disponible dans plusieurs villes du Maroc, avec horaires flexibles et accompagnement inclus.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
          <li>Transfert aller-retour inclus.</li>
          <li>Prix forfaitaire selon zone géographique.</li>
          <li>Voyage confortable avec bagages pris en charge.</li>
        </ul>

        <Link to="/Offres" className="text-blue-600 underline hover:text-blue-800">
          ← Retour aux offres
        </Link>
      </div>
    </div>
  );
}

export default Navette;