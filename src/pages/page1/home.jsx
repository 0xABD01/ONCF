import React from 'react';
import Image1 from './images/popi.png'; 
import Image2 from './images/papa.png'; 
import Image3 from './images/res.png'; 
import { NavLink } from 'react-router-dom';
import Slider from "react-slick"
import Service from './whyUS';
import Offres from './offres';
import Appstor from './Appstor';


const imageList=[
    {id:1,
    img:Image3,
    title:"Réservez des billets flexibles et voyagez en toute tranquillité",
    description:"Planifiez votre trajet en toute sérénité - options flexibles,",
    description2:"réservation instantanée, contrôle total."},
    
    {id:2,
    img:Image1,
    title:"Gagnez du temps avec notre système de réservation rapide",
    description:"Consultez les horaires en temps réel",
    description2:"et trouvez le billet qui vous convient en quelques clics."},

    {id:3,
    img:Image2,
    title:"Voyagez confortablement vers toutes vos destinations",
    description:"Des trains modernes et ponctuels,",
    description2:"pour un trajet sûr et agréable."}
]
function Home() {
    var settings={
        dots:false,
        arrows:false,
        infinite:true,
        speed:800,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true,
    };

  return (
    <>
    <div className="p-4 relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex items-center dark:text-white duration-200">
      

      <div className="h-[875px] w-[737px] bg-blue-400/40 absolute -top-1/2 right-100 rounded-3xl rotate-45 -z-9" />

      <div className="container pb-8 sm:pb-0">
       <Slider {...settings}>
       {imageList.map((items)=>(
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 text-black relative z-10 gap-4">
            
         
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
              <h1 className="text-4xl sm:text-4.25xl lg:text-5xl font-bold py-1">
                {items.title}
              </h1>
              <p className="text-sm py-2">
                {items.description}<br />
                {items.description2}
              </p>
              <div>
                <NavLink
                  to="/recherche-disponibilites"
                  className="bg-blue-500 text-white hover:bg-blue-400 duration-200 py-2 px-4 rounded-full inline-block"
                >
                  Découvrir
                </NavLink>
              </div>
            </div>

     
            <div className="order-1 sm:order-2 flex justify-center items-center">
                <div className='relative z-10'>
              <img
                src={items.img}
                alt="IMAGES"
                className="w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] object-contain lg:scale-149"
              />
              </div>
            </div>

          </div>
        </div>
       ))}
        

       </Slider>
       
        
      </div>
      
      
    </div>
    <Service/>
    <Offres/>
    <Appstor/>
    
    </>
  );
  
  
}

export default Home;
