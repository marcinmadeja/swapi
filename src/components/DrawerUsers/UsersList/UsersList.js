import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import UserItem from './UserItem/UserItem';
import { ListTitle } from './UsersList.styles';

const DISPLAY_USERS_LIMIT = 5;

export const UsersList = ({
  usersList,
  title,
  extendDrawerUsers,
}) => {
  if (!usersList) return null;
  const usersToDisplay = usersList.slice(0, DISPLAY_USERS_LIMIT);

  return (
    <div>
      <ListTitle open={extendDrawerUsers}>{title}</ListTitle>
      {usersToDisplay.map((user, index) => <UserItem key={index} user={user} />)}
    </div>
  );
};

const mapStateToProps = state => {
  const { extendDrawerUsers } = state.drawers;
  return { extendDrawerUsers };
};

UsersList.propTypes = {
  usersList: PropTypes.array.isRequired,
  extendDrawerUsers: PropTypes.bool,
  title: PropTypes.string,
};

UsersList.defaultProps = {
  title: '',
  extendDrawerUsers: false,
};

export default compose(
  connect(mapStateToProps),
)(UsersList);
