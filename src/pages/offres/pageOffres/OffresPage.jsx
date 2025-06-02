
import React from 'react';
import OffresList from '../components/OffresList';
import { data } from '../data/offres'; 

function OffresPage() {
  return (
    <div>

      <OffresList data={data} />
    </div>
  );
}

export default OffresPage;