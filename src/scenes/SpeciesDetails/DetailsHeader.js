import React from 'react';
import {
  Main,
  Title,
  Text,
} from 'components/DetailsPage/styles';

const DetailsHeader = ({ details }) => {
  const { name, classification, language } = details;

  return (
    <Main>
      <Title>{name}</Title>

      <Text>
        <p>
          <strong>classification:</strong>
          {classification}
        </p>

        <p>
          <strong>language:</strong>
          {language}
        </p>
      </Text>
    </Main>
  );
};

export default DetailsHeader;
