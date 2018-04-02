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
  position: absolute;
  top: -15px;
  left: 0;
  transform: translateY(-100%);
  background: #fff;
  padding: 10px 20px 0;
`;

const Info = ({
  title,
  producer,
  releaseDate,
  director,
  openingCrawl,
}) => {
  return (
    <Main>
      <Title>{title}</Title>

      <Text>
        <p>
          <strong>Producer:</strong>
          {producer}
        </p>

        <p>
          <strong>Director:</strong>
          {director}
        </p>

        <p>
          <strong>Release:</strong>
          {releaseDate}
        </p>
      </Text>
    </Main>
  );
};

export default Info;
