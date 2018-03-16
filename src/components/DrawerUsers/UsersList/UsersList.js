import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles';

import UserItem from './UserItem/UserItem';
import { ListTitle } from './UsersList.styles';

const DISPLAY_USERS_LIMIT = 5;

const UsersList = ({
  theme,
  usersList,
  title,
  extendDrawerUsers,
}) => {
  if (!usersList) return null;
  const usersToDisplay = usersList.slice(0, DISPLAY_USERS_LIMIT);

  return (
    <div>
      <ListTitle theme={theme} open={extendDrawerUsers}>{title}</ListTitle>
      {usersToDisplay.map((user, index) => <UserItem key={index} user={user} />)}
    </div>
  );
};

const mapStateToProps = state => {
  const { extendDrawerUsers } = state.drawers;
  return { extendDrawerUsers };
};

export default compose(
  connect(mapStateToProps),
  withStyles(null, { withTheme: true }),
)(UsersList);
