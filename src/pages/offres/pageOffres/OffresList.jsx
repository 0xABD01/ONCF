
import React from 'react';
import { NavLink } from 'react-router-dom';

function OffresList({ data }) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Offres Spéciales</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item) => (
            <NavLink
              to={item.path}
              key={item.id}
              className="block group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-blue-500 text-sm font-medium">En savoir plus →</span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OffresList;