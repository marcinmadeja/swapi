import React from 'react';
import PropTypes from 'prop-types';

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

DefaultContent.propTypes = {
  details: PropTypes.shape({
    height: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    hair_color: PropTypes.string.isRequired,
    skin_color: PropTypes.string.isRequired,
    eye_color: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultContent;
