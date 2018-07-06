import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import MenuIcon from 'material-ui-icons/Menu';

import UsersList from './UsersList/UsersList';

export const DrawerUsers = ({
  toggleExtend,
  usersList,
  usersListLast,
  usersListFriends,
}) => {
  return (
    <Fragment>
      <List component="nav">
        <ListItem button onClick={toggleExtend} data-test="toggleButton">
          <ListItemIcon>
            <MenuIcon />
          </ListItemIcon>
          <ListItemText primary="Toggle Users" />
        </ListItem>
      </List>

      <UsersList usersList={usersList} title="Friends" />

      <UsersList usersList={usersListLast} title="Last added" />

      <UsersList usersList={usersListFriends} title="Random users" />
    </Fragment>
  );
};

const mapStateToProps = state => {
  const {
    usersList,
    usersListLast,
    usersListFriends,
  } = state.usersList;

  return { usersList, usersListLast, usersListFriends };
};

DrawerUsers.propTypes = {
  toggleExtend: PropTypes.func.isRequired,
  usersList: PropTypes.array.isRequired,
  usersListLast: PropTypes.array.isRequired,
  usersListFriends: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(DrawerUsers);

