import React from 'react';
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

export default DetailsHeader;
