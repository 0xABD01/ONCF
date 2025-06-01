import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from './images/families.jpeg';
import image2 from './images/students.jpg';
import image3 from './images/point.jpg';
import image4 from './images/acce.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const data = [
  {
    id: 1,
    image: image1,
    title: "Offre Famille",
    description: "Profitez de notre offre spéciale Famille pour des trajets encore plus agréables et abordables",
    path: "/Offres/Famille",
  },
  {
    id: 2,
    image: image2,
    title: "Offre Navette",
    description: "Profitez de notre service de navette pour un transfert pratique et rapide entre les gares et votre domicile.",
    path: "/Offres/Navette",
  },
  
  {
    id: 3,
    image: image4,
    title: "Offre Accessibilité",
    description: "Des conditions avantageuses pour les personnes à mobilité réduite, avec accompagnement et assistance à bord, à tarif réduit.",
    path: "/Offres/Accessibilité",
  },
  {
    id: 4,
    image: image3,
    title: "Offre Early Booking",
    description: "Plus vous réservez à l’avance, plus vous économisez ! Jusqu’à -25 % sur les billets achetés au moins 15 jours avant le départ.",
    path: "/Offres/Early-Booking",
  },
  
  
];

function Offres() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold md:text-4xl mb-4">Nos Offres Spéciales</h2>
        <p className="text-gray-600">Profitez d'avantages uniques selon votre profil</p>
      </div>

      <div className="relative">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
          className="offres-swiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="h-full py-4">
              <NavLink to={item.path}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full transition-transform hover:-translate-y-1 hover:shadow-xl duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow text-center">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>

   
        <div className="flex justify-center gap-4 mt-10">
          <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
            <BsChevronLeft className="text-xl" />
          </button>
          <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
            <BsChevronRight className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Offres;
