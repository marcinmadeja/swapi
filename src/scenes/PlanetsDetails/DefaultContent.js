import React from 'react';

const DefaultContent = ({
  details: {
    terrain,
    surface_water,
    population,
    orbital_period,
    rotation_period,
  },
}) => {
  return (
    <div>
      terrain: <strong>{terrain}</strong><br />
      surface water: <strong>{surface_water}</strong><br />
      population: <strong>{population}</strong><br />
      orbital period: <strong>{orbital_period}</strong><br />
      rotation period: <strong>{rotation_period}</strong><br />
    </div>
  );
};

export default DefaultContent;
