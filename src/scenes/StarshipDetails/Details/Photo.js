import React from 'react';
import styled from 'styled-components';
import FilmsImage from 'images/films';

const Img = styled.img`
  width: 100%;
  display: block;
  margin-bottom: 15px;
`;

const Photo = ({ episodeId }) => {
  if (!episodeId) return null;

  return (
    <Img src={FilmsImage[`film${episodeId}`]} alt="" />
  );
};

export default Photo;
