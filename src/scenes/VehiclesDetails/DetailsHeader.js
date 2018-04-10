import React from 'react';
import {
  Main,
  Title,
  Text,
} from 'components/DetailsPage/styles';

const DetailsHeader = ({ details }) => {
  const { name, manufacturer, model } = details;

  return (
    <Main>
      <Title>{name}</Title>

      <Text>
        <p>
          <strong>Manufacturer:</strong>
          {manufacturer}
        </p>

        <p>
          <strong>Model:</strong>
          {model}
        </p>
      </Text>
    </Main>
  );
};

export default DetailsHeader;
