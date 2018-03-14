import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import MenuIcon from 'material-ui-icons/Menu';

import UsersList from './UsersList/UsersList';

const DrawerUsers = ({
  toggleExtend,
  usersList,
  usersListLast,
  usersListFriends,
}) => {
  console.log('usersList', usersList);

  return (
    <Fragment>
      <List component="nav">
        <ListItem button onClick={toggleExtend}>
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

export default connect(mapStateToProps)(DrawerUsers);
