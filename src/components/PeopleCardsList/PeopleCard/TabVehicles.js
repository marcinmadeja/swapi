import React from 'react';
import { Film } from './TabFilms.styles';

const TabVehicles = ({
  userData: { vehicles },
}) => {
  if (!vehicles.length) return 'no vehicle';

  return (
    <div>
      {vehicles.map(vehicle => <Film key={vehicle}>{vehicle}</Film>)}
    </div>
  );
};

export default TabVehicles;
