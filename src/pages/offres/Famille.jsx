import React from 'react';
import { Link } from 'react-router-dom';

function Famille() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Offre Famille</h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          Notre offre famille vous permet de voyager en groupe avec des réductions sur les billets.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Les enfants âgés de 4 à 12 ans bénéficient d’un tarif préférentiel, et les trajets sont adaptés aux familles nombreuses.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
          <li>Réduction jusqu’à -30% sur les billets enfant.</li>
          <li>Priorité d’embarquement pour les familles.</li>
          <li>Espaces réservés pour les poussettes.</li>
        </ul>

        <Link to="/Offres" className="text-blue-600 underline hover:text-blue-800">
          ← Retour aux offres
        </Link>
      </div>
    </div>
  );
}

export default Famille;