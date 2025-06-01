import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

function MotDePasseOublie() {
  return (
    
   
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Réinitialiser le mot de passe
        </h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Entrez votre e-mail"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-cyan-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-300 text-white rounded-lg font-medium hover:opacity-90 transition"
          >
            Envoyer le lien de réinitialisation
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/" className="text-cyan-600 hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
    
  );
}

export default MotDePasseOublie;
