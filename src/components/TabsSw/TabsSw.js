import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  updateSwPeople,
  updateSwVehicles,
  updateSwStarships,
  updateSwSpecies,
  updateSwPlanets,
} from 'actions/swUpdate';
import { compose } from 'redux';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';

import TabContent from './TabContent';
import { styles } from './TabsSw.styles';

class TabsSw extends Component {
  constructor(props) {
    super(props);

    this.state = { currentTab: 0 };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(event, value) {
    this.setState({ currentTab: value });
  }

  getLoadedList(type) {
    switch (type) {
      case 'people': return this.props.peopleList;
      case 'starships': return this.props.starshipsList;
      case 'vehicles': return this.props.vehiclesList;
      case 'species': return this.props.speciesList;
      default: return null;
    }
  }

  getUpdateData(type) {
    switch (type) {
      case 'people': return this.props.updateSwPeople;
      case 'starships': return this.props.updateSwStarships;
      case 'vehicles': return this.props.updateSwVehicles;
      case 'species': return this.props.updateSwSpecies;
      default: return () => {};
    }
  }

  render() {
    const { currentTab } = this.state;
    const {
      classes,
      tabsList,
    } = this.props;

    console.log('tabsList', tabsList);

    return (
      <Fragment>
        <Tabs
          value={currentTab}
          onChange={this.handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          className={classes.tabsRoot}
        >
          {tabsList.map(tab => (
            <Tab
              key={tab.name}
              className={classes.tabRoot}
              label={tab.name}
            />
          ))}
        </Tabs>

        <SwipeableViews
          index={currentTab}
          onChangeIndex={this.handleChangeIndex}
        >
          {tabsList.map((tab, key) => (
            <TabContent
              key={tab.name}
              name={tab.name}
              urlList={tab.list}
              isActive={currentTab === key}
              loadedData={this.getLoadedList(tab.type)}
              updateData={this.getUpdateData(tab.type)}
            />
          ))}
        </SwipeableViews>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const filmsList = state.swFilms.list;
  const peopleList = state.swPeople.list;
  const starshipsList = state.swStarships.list;
  const vehiclesList = state.swVehicles.list;
  const speciesList = state.swSpecies.list;

  return {
    filmsList,
    peopleList,
    starshipsList,
    speciesList,
    vehiclesList,
  };
};

const actions = {
  updateSwPeople,
  updateSwStarships,
  updateSwVehicles,
  updateSwSpecies,
  updateSwPlanets,
};

export default compose(
  connect(mapStateToProps, { ...actions }),
  withStyles(styles),
)(TabsSw);
