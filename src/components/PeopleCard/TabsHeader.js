import React from 'react';
import PropTypes from 'prop-types';
import Tabs, { Tab } from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';

import DirectionsCarIcon from 'material-ui-icons/DirectionsCar';
import LocalAirportIcon from 'material-ui-icons/LocalAirport';
import LocalMoviesIcon from 'material-ui-icons/LocalMovies';

const TabsHeader = ({
  currentTab,
  classes,
  onTabChange,
}) => {
  return (
    <Tabs
      value={currentTab}
      onChange={onTabChange}
      indicatorColor="primary"
      textColor="primary"
      className={classes.tabsRoot}
    >
      <Tab className={classes.tabRoot} label="Bio" icon={<PhoneIcon />} />
      <Tab className={classes.tabRoot} label="Films" icon={<LocalMoviesIcon />} />
      <Tab className={classes.tabRoot} label="Starships" icon={<LocalAirportIcon />} />
      <Tab className={classes.tabRoot} label="Vehicles" icon={<DirectionsCarIcon />} />
    </Tabs>
  );
};

TabsHeader.propTypes = {
  currentTab: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default TabsHeader;
