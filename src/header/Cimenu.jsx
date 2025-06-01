import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

function Cimenu({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full bg-white shadow-md z-50"
        >
          <div className="py-8 px-4">
            <ul className="flex flex-col items-center gap-6 text-lg font-medium text-gray-700">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/planifier">Planifier</Link></li>
              <li><Link to="/abonnements">Abonnements</Link></li>
              <li><Link to="/promos">Promos</Link></li>
              <li><Link to="/info">Info</Link></li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Cimenu;
