import React from 'react';
import {
  Main,
  Title,
  Text,
} from 'components/DetailsPage/styles';

const DetailsHeader = ({ details }) => {
  const { name, climate, gravity } = details;

  return (
    <Main>
      <Title>{name}</Title>

      <Text>
        <p>
          <strong>climate:</strong>
          {climate}
        </p>

        <p>
          <strong>gravity:</strong>
          {gravity}
        </p>
      </Text>
    </Main>
  );
};

export default DetailsHeader;
