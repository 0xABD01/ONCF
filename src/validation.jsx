// src/components/Validation.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { billetsList } from './data/billetsMock';
import { addToCart } from './features/cartSlice';

function Validation() {
  const data = useSelector((state) => state.planifier);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [resultats, setResultats] = useState([]);

  useEffect(() => {
    if (!data.depart || !data.destination || !data.date) {
      navigate('/');
      return;
    }

    const inputDateOnly = data.date.split(' ')[0]; // ex: "01-06-2025"

    const filtered = billetsList.filter(billet => {
      const billetDateOnly = billet.date.split(':')[0]; // ex: "01-06-2025"
      return (
        billet.depart === data.depart &&
        billet.destination === data.destination &&
        billetDateOnly === inputDateOnly
      );
    });

    setResultats(filtered);
  }, [data, navigate]);

  const handleAddToCart = (billet) => {
    const billetAvecInfos = {
      ...billet,
      nbAdultes: data.adultes,
      nbEnfants: data.enfants,
      classe: data.classe,
      dateRecherche: data.date,
    };

    dispatch(addToCart(billetAvecInfos));
    alert("Billet ajouté au panier !");
    
    navigate('/shope'); // Redirection vers /shope
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Résultats de votre recherche</h2>

        {/* Détails utilisateur */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-700">
          <p><strong>Départ :</strong> {data.depart}</p>
          <p><strong>Destination :</strong> {data.destination}</p>
          <p><strong>Date recherchée :</strong> {data.date}</p>
          <p><strong>Adultes :</strong> {data.adultes}</p>
          <p><strong>Enfants :</strong> {data.enfants}</p>
          <p><strong>Classe :</strong>
            {data.classe === '1' ? '1ère Classe' :
             data.classe === '2' ? '2ème Classe' : 'Lit single'}
          </p>
        </div>

        {/* Résultats */}
        {resultats.length > 0 ? (
          <table className="min-w-full table-auto border-collapse bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Départ</th>
                <th className="px-4 py-2">Destination</th>
                <th className="px-4 py-2">Date du billet</th>
                <th className="px-4 py-2">Prix</th>
                <th className="px-4 py-2">Classe</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {resultats.map((billet) => (
                <tr key={billet.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{billet.depart}</td>
                  <td className="px-4 py-2">{billet.destination}</td>
                  <td className="px-4 py-2">{billet.date.replace(':', ' ')}</td>
                  <td className="px-4 py-2">{billet.prix} €</td>
                  <td className="px-4 py-2">
                    {billet.classe === '1' ? '1ère Classe' :
                     billet.classe === '2' ? '2ème Classe' : 'Lit single'}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleAddToCart(billet)}
                      className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Ajouter au panier
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-red-500 mt-6">
            Aucun billet trouvé pour ces critères.
          </p>
        )}

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Nouvelle recherche
          </button>
        </div>
      </div>
    </div>
  );
}

export default Validation;