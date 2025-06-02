// src/components/Shope.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cartSlice';
import { useNavigate } from 'react-router-dom';

function Shope() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calcul du prix total
  const totalPrice = cartItems.reduce((sum, item) => sum + item.prix * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🛒 Mon Panier</h2>

        {/* Liste des articles */}
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Votre panier est vide.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Billets */}
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{item.depart} → {item.destination}</h3>
                    <p className="text-sm text-gray-500 mt-1">Date : {item.date.replace(':', ' ')}</p>
                    <p className="text-xs text-gray-400">
                      Classe : {item.classe === '1' ? '1ère Classe' : item.classe === '2' ? '2ème Classe' : 'Lit single'}
                    </p>
                    <p className="mt-2 text-green-600 font-medium">{item.prix} €</p>
                  </div>

                  <div className="flex flex-col items-end space-y-2">
                    {/* Quantité */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                        }
                        disabled={item.quantity <= 1}
                        className={`w-8 h-8 flex items-center justify-center rounded-full ${
                          item.quantity <= 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-red-100 text-red-600 hover:bg-red-200'
                        }`}
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200"
                      >
                        +
                      </button>
                    </div>

                    {/* Supprimer */}
                    <button
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                      className="text-sm text-red-500 hover:text-red-700"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Résumé */}
    <div className="bg-white p-6 rounded-lg shadow sticky top-4">
  <h3 className="text-xl font-semibold mb-4">Résumé de la commande</h3>

  <ul className="space-y-3 mb-4">
    {cartItems.map((item, index) => (
      <li key={item.id} className="flex justify-between items-center p-2 border-b last:border-none">
        <div className="flex items-center space-x-3">
          {/* Numéro du ticket */}
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
            Ticket {index + 1}
          </span>
          
          {/* Départ → Destination + date */}
          <div className="text-sm">
            <p className="font-medium">{item.depart} → {item.destination}</p>
            <p className="text-gray-500 text-xs">
              {item.date}
            </p>
  </div>
        </div>

        {/* Prix total pour cet item */}
        <span className="font-semibold text-gray-700">
          {(item.prix * item.quantity).toFixed(2)} €
        </span>
      </li>
    ))}
  </ul>
                <hr className="my-4" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total :</span>
                  <span className="text-green-600">{totalPrice.toFixed(2)} €</span>
                </div>

                <button
                  onClick={() => alert('Commande validée !')}
                  className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                  Confirmer la commande
                </button>

                <button
                  onClick={() => navigate('/validation')}
                  className="mt-3 w-full py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  Continuer mes recherches
                </button>
              </div>
            </div>
         
        )}
      </div>
    </div>
  );
}

export default Shope;