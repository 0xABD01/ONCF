// src/components/APropos.js
import React from 'react';
import Image1 from './image/train.jpg'; 

function APropos() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête */}
      <header className="bg-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">À propos de ONCF</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Découvrez qui nous sommes, notre mission et nos valeurs.
        </p>
      </header>

      {/* Contenu principal */}
      <main className="container mx-auto px-6 py-16 space-y-16">

        {/* Section : Qui sommes-nous ? */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Qui sommes-nous ?</h2>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            L'Office National des Chemins de Fer (ONCF) est l’opérateur ferroviaire historique du Maroc. 
            Depuis plus de 100 ans, nous relions les grandes villes du pays, offrant des services de transport 
            passagers et marchandises fiables, rapides et confortables. Notre objectif est de contribuer au développement 
            économique et social à travers un réseau ferroviaire moderne et performant.
          </p>
        </section>

        {/* Section : Notre Mission */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notre Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Notre mission est de fournir un service ferroviaire de qualité, connectant les principaux centres urbains et touristiques du Maroc. 
              Nous travaillons chaque jour pour améliorer la mobilité, réduire les temps de trajet et offrir à nos clients une expérience agréable et sécurisée.
            </p>
          </div>
          <div className="order-1 md:order-2 bg-blue-100 rounded-lg p-6 shadow-md flex justify-center items-center">
            <img src={Image1} alt="Train Maroc" className="rounded w-full h-auto max-w-sm object-cover" />
          </div>
        </section>

        {/* Section : Nos Valeurs */}
        <section className="bg-white py-10 px-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-blue-600 text-xl">🚀</span>
              </div>
              <h3 className="font-semibold text-lg">Innovation</h3>
              <p className="text-gray-500">Nous investissons dans les technologies modernes pour améliorer continuellement notre service.</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-blue-600 text-xl">🌍</span>
              </div>
              <h3 className="font-semibold text-lg">Durabilité</h3>
              <p className="text-gray-500">Le train est le moyen de transport le plus écologique. Nous encourageons la mobilité durable.</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-blue-600 text-xl">🤝</span>
              </div>
              <h3 className="font-semibold text-lg">Fiabilité</h3>
              <p className="text-gray-500">Depuis des décennies, nous assurons un service régulier, ponctuel et accessible à tous.</p>
            </div>
          </div>
        </section>

        {/* Section : Historique */}
        <section className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Notre Histoire</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Créée en 1923, l'ONCF a pour rôle de gérer le réseau ferroviaire marocain. Au fil des années, elle a connu de nombreuses évolutions, notamment l’électrification des lignes et l’introduction du TGV Marocain.
            </p>
            <p>
              Aujourd’hui, l’ONCF dessert plus de 20 millions de voyageurs par an et continue d’étendre son réseau pour répondre aux besoins croissants de déplacements rapides et efficaces [[1]](https://www.oncf.ma). 
            </p>
          </div>
        </section>

    

      </main>

      
    </div>
  );
}

export default APropos;