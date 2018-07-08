import React from 'react';
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

export default CardTitle;
