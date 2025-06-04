import React, { useState } from 'react';
import { abonnementsList } from './data';

function Abonnement() {
  const [selectedCard, setSelectedCard] = useState(abonnementsList[0]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Nos Cartes d’Abonnement</h2>
        <p className="text-center text-gray-600 mb-10">Choisissez la carte qui correspond à votre profil et obtenez des avantages exclusifs.</p>

        
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {abonnementsList.map((card) => (
            <div
              key={card.id}
              onClick={() => setSelectedCard(card)}
              className={`bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all ${
                selectedCard.id === card.id ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-3">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>

        
        {selectedCard && (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{selectedCard.title}</h3>

       
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Avantages</h4>
              <ul className="space-y-2">
                {selectedCard.details.avantages.map((avantage, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✔</span>
                    <span className="text-gray-700">{avantage}</span>
                  </li>
                ))}
              </ul>
            </div>

        
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Procédure</h4>
              <ol className="list-decimal pl-5 space-y-2">
                {selectedCard.details.procedure.map((etape, index) => (
                  <li key={index} className="text-gray-700 ml-2">{etape}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Abonnement;