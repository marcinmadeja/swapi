import React from 'react';

const DefaultContent = ({
  details: {
    average_height,
    skin_colors,
    hair_colors,
    rotation_period,
    eye_colors,
    average_lifespan,
  },
}) => {
  return (
    <div>
      average height: <strong>{average_height}</strong><br />
      skin colors: <strong>{skin_colors}</strong><br />
      hair colors: <strong>{hair_colors}</strong><br />
      eye colors: <strong>{eye_colors}</strong><br />
      average lifespan: <strong>{average_lifespan}</strong><br />
    </div>
  );
};

export default DefaultContent;
