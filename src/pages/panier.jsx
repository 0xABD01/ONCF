// src/components/Panier.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cartSlice';

function Panier() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calcul du prix total
  const totalPrice = cartItems.reduce((sum, item) => sum + item.prix, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">🛒 Votre Panier</h2>

        {/* Liste des billets */}
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Votre panier est vide.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200 transition transform hover:scale-105 duration-200">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-700">{item.depart} → {item.destination}</h3>
                  <p className="text-sm text-gray-500">Date : {item.date.replace(':', ' ')}</p>
                  <p className="text-sm text-gray-500">
                    Adultes : {item.nbAdultes} | Enfants : {item.nbEnfants}
                  </p>
                  <p className="mt-1 text-green-600 font-medium">{item.prix} €</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Classe :{' '}
                    {item.classe === '1' ? '1ère Classe' :
                     item.classe === '2' ? '2ème Classe' : 'Lit single'}
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 flex gap-3">
                  <button
                    onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}

            {/* Résumé et bouton de validation */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border-t border-b border-blue-100">
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-700">Prix total :</p>
                <p className="text-xl font-bold text-green-600">{totalPrice.toFixed(2)} €</p>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <button
                onClick={() => alert('Commande validée !')}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 transition-transform transform hover:scale-105"
              >
                Confirmer la commande
              </button>
            </div>
          </div>
        )}

        {/* Retour à l'accueil */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 underline text-sm"
          >
            ← Retour aux recherches
          </button>
        </div>
      </div>
    </div>
  );
}

export default Panier;