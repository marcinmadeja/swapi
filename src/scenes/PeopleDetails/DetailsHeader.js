import React from 'react';
import PropTypes from 'prop-types';
import {
  Main,
  Title,
  Text,
} from 'components/DetailsPage/styles';

const DetailsHeader = ({ details }) => {
  const { name, birth_year, gender } = details;

  return (
    <Main>
      <Title>{name}</Title>

      <Text>
        <p>
          <strong>birth year:</strong>
          {birth_year}
        </p>

        <p>
          <strong>gender:</strong>
          {gender}
        </p>
      </Text>
    </Main>
  );
};

DetailsHeader.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    birth_year: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailsHeader;
