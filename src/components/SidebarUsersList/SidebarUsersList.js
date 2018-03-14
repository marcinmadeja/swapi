import React, { Fragment } from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import MenuIcon from 'material-ui-icons/Menu';

const SidebarUsersList = ({ toggleExtend }) => {
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
    </Fragment>
  );
};

export default SidebarUsersList;
