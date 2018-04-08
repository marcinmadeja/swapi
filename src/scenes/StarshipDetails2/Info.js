import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  margin: 0 0 10px;
  font-size: 20px;
  font-weight: 700;
`;

const Text = styled.div`
  margin-bottom: 10px;

  p {
    margin: 0 0 5px;
  }

  strong {
    font-weight: 700;
    margin-right: 5px;
  }
`;

const Main = styled.div`

`;

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
