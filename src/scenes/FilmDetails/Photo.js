import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FilmsImage from 'images/films';

export const Img = styled.img`
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

Photo.propTypes = {
  episodeId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default Photo;
