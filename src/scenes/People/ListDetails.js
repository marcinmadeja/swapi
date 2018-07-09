import React from 'react';
import PropTypes from 'prop-types';
import {
  Name,
  InfoItem,
} from 'components/SwapiList/styles';

const ListDetails = ({ details }) => {
  const { name, birth_year, gender } = details;

  return (
    <div>
      <Name>
        {name}
      </Name>

      <InfoItem>
        <strong>birth year:</strong>
        {birth_year}
      </InfoItem>

      <InfoItem>
        <strong>gender:</strong>
        {gender}
      </InfoItem>
    </div>
  );
};

ListDetails.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    birth_year: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListDetails;
