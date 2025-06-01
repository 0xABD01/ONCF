import React from 'react';
import { Link } from 'react-router-dom';

function Accessibilite() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Offre Accessibilité</h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          Nous proposons un service adapté aux personnes à mobilité réduite, avec assistance complète pendant tout le voyage.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Des places spéciales sont réservées à bord des trains, et une équipe accompagne les voyageurs depuis leur arrivée à la gare jusqu’à leur siège.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
          <li>Accès prioritaire aux guichets.</li>
          <li>Accompagnement à la montée/descente.</li>
          <li>Tarifs préférentiels.</li>
        </ul>

        <Link to="/promos" className="text-blue-600 underline hover:text-blue-800">
          ← Retour aux offres
        </Link>
      </div>
    </div>
  );
}

export default Accessibilite;