import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';  
import { TfiMoney } from "react-icons/tfi";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { MdCardTravel } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const data = [
  {
    id: 1,
    name: "Meilleur prix",
    icon: <TfiMoney className='text-5xl text-black group-hover:text-blue-500 duration-300' />,
    description: "Profitez des meilleurs tarifs pour tous vos trajets, avec des offres exclusives et des réductions fréquentes.",
    path: "/promos",
    aosDelay: "0",
  },
  {
    id: 2,
    name: "Réservation rapide",
    icon: <BsFillLightningChargeFill className='text-5xl text-black group-hover:text-blue-500 duration-300' />,
    description: "Réservez vos billets en quelques clics, sans file d’attente ni perte de temps.",
    path: "/planifier",
    aosDelay: "500",
  },
  {
    id: 3,
    name: "Voyage confortable",
    icon: <MdCardTravel className='text-5xl text-black group-hover:text-blue-500 duration-300' />,
    description: "Des trains modernes, propres et confortables pour rendre votre voyage agréable.",
    path: "/info",
    aosDelay: "1000",
  },
];

const Service = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: false,  
    });

    AOS.refresh();
  }, []);

  return (
    <div className='py-14 bg-gray-50 sm:min-h-[600px] sm:grid sm:place-items-center'>
      <div className='container'>
        <div className='pb-12'>
          <h1 className='text-3xl font-semibold text-center font-serif sm:text-4xl'>Pourquoi nous choisir</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {data.map((items) => (
            <div
              key={items.id}
              data-aos="fade-up"  
              data-aos-delay={items.aosDelay} 
              className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-white hover:bg-blue-100 duration-300 text-black rounded-lg shadow-md'
            >
              <div className='grid place-items-center'>
                {items.icon}
              </div>
              <h1 className='text-lg font-semibold'>{items.name}</h1>
              <p className='text-sm'>{items.description}</p>
              <NavLink to={items.path} className='text-blue-500 hover:text-blue-700'>
                Plus
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
