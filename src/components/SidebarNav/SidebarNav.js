import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import MenuIcon from 'material-ui-icons/Menu';
import HomeIcon from 'material-ui-icons/Home';
import PersonIcon from 'material-ui-icons/Person';
import PersonAddIcon from 'material-ui-icons/PersonAdd';
import MapIcon from 'material-ui-icons/Map';
import DirectionsCarIcon from 'material-ui-icons/DirectionsCar';
import LocalAirportIcon from 'material-ui-icons/LocalAirport';
import LocalMoviesIcon from 'material-ui-icons/LocalMovies';

import { styles } from './SidebarNav.styles';

const SidebarNav = ({
  classes,
  toggleExtend,
}) => {
  return (
    <Fragment>
      <List component="nav">
        <ListItem
          button
          onClick={toggleExtend}
          data-test="toggleButton"
        >
          <ListItemIcon>
            <MenuIcon />
          </ListItemIcon>
          <ListItemText primary="Toggle Nav" />
        </ListItem>

        <ListItem
          button
          component={props => <NavLink exact to="/" activeClassName={classes.activeItem} {...props} />}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem
          button
          component={props => <NavLink exact to="/people" activeClassName={classes.activeItem} {...props} />}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="People" />
        </ListItem>

        <ListItem
          button
          component={props => <NavLink exact to="/species" activeClassName={classes.activeItem} {...props} />}
        >
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Species" />
        </ListItem>

        <ListItem
          button
          component={props => <NavLink exact to="/planets" activeClassName={classes.activeItem} {...props} />}
        >
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="Planets" />
        </ListItem>

        <ListItem
          button
          component={props => <NavLink exact to="/vehicles" activeClassName={classes.activeItem} {...props} />}
        >
          <ListItemIcon>
            <DirectionsCarIcon />
          </ListItemIcon>
          <ListItemText primary="Vehicles" />
        </ListItem>

        <ListItem
          button
          component={props => <NavLink exact to="/starships" activeClassName={classes.activeItem} {...props} />}
        >
          <ListItemIcon>
            <LocalAirportIcon />
          </ListItemIcon>
          <ListItemText primary="Starships" />
        </ListItem>

        <ListItem
          button
          component={props => <NavLink exact to="/films" activeClassName={classes.activeItem} {...props} />}
        >
          <ListItemIcon>
            <LocalMoviesIcon />
          </ListItemIcon>
          <ListItemText primary="Films" />
        </ListItem>
      </List>
    </Fragment>
  );
};

export default withStyles(styles)(SidebarNav);
