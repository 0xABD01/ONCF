import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Compte() {
  const [login, setLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">
          {login ? 'Se connecter' : "S'inscrire"}
        </h1>

    
        <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-400 transition-all duration-300 ${
              login ? 'left-0' : 'left-1/2'
            }`}
          />
          <button
            onClick={() => setLogin(true)}
            className={`w-1/2 text-sm sm:text-base font-medium z-10 transition-all ${
              login ? 'text-white' : 'text-black'
            }`}
          >
            Se connecter
          </button>
          <button
            onClick={() => setLogin(false)}
            className={`w-1/2 text-sm sm:text-base font-medium z-10 transition-all ${
              !login ? 'text-white' : 'text-black'
            }`}
          >
            S'inscrire
          </button>
        </div>


        <form className="space-y-4">
          {!login && (
            <>
            <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                 <input type="radio" name="civilite" value="Monsieur" className="accent-blue-600" required />
                     <span className="text-gray-700">Monsieur</span>
                </label>
                <label className="flex items-center gap-2">
                <input type="radio" name="civilite" value="Madame" className="accent-blue-600" required />
                <span className="text-gray-700">Madame</span>
                </label>
            </div>

              <input
                type="text"
                placeholder="Nom"
                required
                className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Prénom"
                required
                className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-500"
              />
              <input
                type="date"
                required
                className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-500"
              />
            </>
          )}

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            required
            className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-500"
          />

          {!login && (
            <>
              <input
                type="password"
                placeholder="Confirmer votre mot de passe"
                required
                className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-500"
              />
              <input
                type="number"
                placeholder="Téléphone"
                required
                className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-500"
              />
            </>
          )}

          {login && (
            <div className="text-right">
              <NavLink to="/compte/motdepasse-oublie" className="text-cyan-600 hover:underline cursor-pointer text-sm">
                Mot de passe oublié ?
              </NavLink>
            </div>
          )}

          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-blue-700 to-cyan-400 text-white rounded-full text-lg font-medium hover:opacity-90 transition"
          >
            {login ? 'Se connecter' : "S'inscrire"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Compte;
