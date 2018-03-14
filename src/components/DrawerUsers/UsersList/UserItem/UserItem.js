import React from 'react';
import { userService } from 'services';
import Avatar from 'material-ui/Avatar';

import {
  Item,
  AvatarWrap,
  UserName,
} from './UserItem.styles';

const UsersItem = ({ user }) => {
  return (
    <Item>
      <AvatarWrap>
        <Avatar
          alt="Adelle Charles"
          src={userService.getImg(user, 'large')}
        />
      </AvatarWrap>

      <UserName>{userService.getName(user)}</UserName>
    </Item>
  );
};

export default UsersItem;
