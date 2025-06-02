import React from 'react';
import { Link } from 'react-router-dom';

function EarlyBooking() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Offre Early Booking</h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          Réservez vos billets dès maintenant et profitez de remises allant jusqu’à -25 % si vous réservez au moins 15 jours avant le départ.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Une solution économique idéale pour planifier vos déplacements à l'avance et économiser.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
          <li>Jusqu’à -25% sur les billets.</li>
          <li>Valable sur toutes les classes.</li>
          <li>Réservation possible jusqu'à 90 jours avant le départ.</li>
        </ul>

        <Link to="/Offres" className="text-blue-600 underline hover:text-blue-800">
          ← Retour aux offres
        </Link>
      </div>
    </div>
  );
}

export default EarlyBooking;