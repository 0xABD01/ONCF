import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setPlanification } from '../features/planifierSlice';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function PlanifierForm({ show }) {
  const [depart, setDepart] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(null); // Date sélectionnée via le calendrier
  const [classe, setClasse] = useState('');
  const [adulteCount, setAdulteCount] = useState(1);
  const [enfantCount, setEnfantCount] = useState(0);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fonction utilitaire pour formater la date en "JJ-MM-YYYY HH:mm"
  const formatDateToCustom = (date) => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mois commence à 0
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date) {
      setError("Veuillez sélectionner une date et une heure");
      return;
    }

    // Convertir la date sélectionnée au format voulu
    const formattedDate = formatDateToCustom(date);

    dispatch(setPlanification({
      depart,
      destination,
      date: formattedDate,
      classe,
      adultes: adulteCount,
      enfants: enfantCount,
    }));

    setError('');
    navigate('/validation');
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-20 right-1/2 transform -translate-x-1/2 bg-white shadow-lg p-6 rounded-md w-full max-w-2xl z-50"
        >
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Champs Départ & Destination */}
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Départ"
                value={depart}
                onChange={(e) => setDepart(e.target.value)}
                className="flex-1 p-2 border rounded"
                required
              />
              <input
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="flex-1 p-2 border rounded"
                required
              />
            </div>

            {/* Sélection de la date avec calendrier */}
            <div>
              <label className="block text-sm mb-1">Sélectionnez une date et une heure</label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="dd-MM-yyyy HH:mm"
                minDate={new Date()} // Bloquer les dates passées
                placeholderText="Choisissez une date"
                className="w-full p-2 border rounded"
                required
              />
            </div>

            {/* Afficher erreur si nécessaire */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Adultes et Enfants */}
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1">
                <label className="block text-sm mb-1">Adultes</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={adulteCount}
                  onChange={(e) => setAdulteCount(Number(e.target.value))}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm mb-1">Enfants</label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={enfantCount}
                  onChange={(e) => setEnfantCount(Number(e.target.value))}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            {/* Classe */}
            <select
              className="p-2 border rounded w-full"
              value={classe}
              onChange={(e) => setClasse(e.target.value)}
              required
            >
              <option value="">Sélectionner la classe</option>
              <option value="1">1ère Classe</option>
              <option value="2">2ème Classe</option>
              <option value="lit">Lit single</option>
            </select>

            {/* Bouton Submit */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Valider
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PlanifierForm;