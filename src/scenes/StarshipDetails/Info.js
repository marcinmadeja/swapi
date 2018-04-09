import React from 'react';
import {
  Title,
  Text,
  Main,
} from 'components/DetailsPage/styles';

const Info = ({
  name,
  model,
  manufacturer,
}) => {
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

export default Info;
