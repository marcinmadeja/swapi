import React, { Fragment } from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import MenuIcon from 'material-ui-icons/Menu';
import HomeIcon from 'material-ui-icons/Home';
import PersonIcon from 'material-ui-icons/Person';
import PersonAddIcon from 'material-ui-icons/PersonAdd';
import MapIcon from 'material-ui-icons/Map';
import DirectionsCarIcon from 'material-ui-icons/DirectionsCar';
import LocalAirportIcon from 'material-ui-icons/LocalAirport';
import LocalMoviesIcon from 'material-ui-icons/LocalMovies';

const SidebarNav = ({ toggleExtend }) => {
  return (
    <Fragment>
      <List component="nav">
        <ListItem button onClick={toggleExtend}>
          <ListItemIcon>
            <MenuIcon />
          </ListItemIcon>
          <ListItemText primary="Toggle Nav" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="People" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Species" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="Planets" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <DirectionsCarIcon />
          </ListItemIcon>
          <ListItemText primary="Vehicles" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <LocalAirportIcon />
          </ListItemIcon>
          <ListItemText primary="Starships" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <LocalMoviesIcon />
          </ListItemIcon>
          <ListItemText primary="Films" />
        </ListItem>
      </List>
    </Fragment>
  );
};

export default SidebarNav;
