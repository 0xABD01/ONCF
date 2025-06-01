import React from 'react';
import playstore from './images/play3.png';
import appstore from './images/appstore.png';

function Appstor() {
  return (
    <div className="w-full bg-cover bg-center bg-no-repeat bg-gray-100">
      <div className="max-w-4xl mx-auto py-10 px-4 text-black">
        <div className="text-center space-y-4 bg-white/80 p-6 rounded-lg shadow-md backdrop-blur-sm">
          <h1 className="text-2xl sm:text-3xl font-semibold font-serif">
            Restez connectés avec notre application
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            Téléchargez notre application et profitez d'une expérience fluide.
          </p>

          <div className="flex justify-center items-center gap-4 mt-4 flex-wrap">
            <a href="#">
              <img
                src={playstore}
                alt="Play Store"
                className="w-32 sm:w-36 hover:scale-105 transition-transform duration-200"
              />
            </a>
            <a href="#">
              <img
                src={appstore}
                alt="App Store"
                className="w-32 sm:w-36 hover:scale-105 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appstor;
