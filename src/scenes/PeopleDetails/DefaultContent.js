import React from 'react';

const DefaultContent = ({
  details: {
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
  },
}) => {
  return (
    <div>
      height: <strong>{height}</strong><br />
      mass: <strong>{mass}</strong><br />
      hair color: <strong>{hair_color}</strong><br />
      skin color: <strong>{skin_color}</strong><br />
      eye color: <strong>{eye_color}</strong><br />
    </div>
  );
};

export default DefaultContent;
