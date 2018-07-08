import React from 'react';
import PropTypes from 'prop-types';

import {
  Content,
  Item,
  Label,
  Value,
} from './TabBio.styles';

const TabBio = ({
  userData: {
    birth_year,
    eye_color,
    hair_color,
    height,
    mass,
    skin_color,
  },
}) => {
  return (
    <Content>
      <Item>
        <Label>Birthday:</Label>
        <Value>{birth_year}</Value>
      </Item>

      <Item>
        <Label>Eye color:</Label>
        <Value>{eye_color}</Value>
      </Item>

      <Item>
        <Label>hair color:</Label>
        <Value>{hair_color}</Value>
      </Item>

      <Item>
        <Label>Height:</Label>
        <Value>{height}</Value>
      </Item>

      <Item>
        <Label>Mass:</Label>
        <Value>{mass}</Value>
      </Item>

      <Item>
        <Label>Skin color:</Label>
        <Value>{skin_color}</Value>
      </Item>
    </Content>
  );
};

TabBio.propTypes = {
  userData: PropTypes.shape({
    birth_year: PropTypes.string.isRequired,
    eye_color: PropTypes.string.isRequired,
    hair_color: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    skin_color: PropTypes.string.isRequired,
  }).isRequired,
};

export default TabBio;
