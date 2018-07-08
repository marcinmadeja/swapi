import React from 'react';
import PropTypes from 'prop-types';
import PersonIcon from 'material-ui-icons/Person';

import {
  Title,
  TitlePicture,
  UserName,
} from './CardTitle.styles';

const CardTitle = ({ name }) => {
  return (
    <Title>
      <TitlePicture>
        <PersonIcon />
      </TitlePicture>

      <UserName>{name}</UserName>
    </Title>
  );
};

CardTitle.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CardTitle;
