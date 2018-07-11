import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  updateSwPeople,
  updateSwVehicles,
  updateSwStarships,
  updateSwSpecies,
  updateSwPlanets,
  updateSwFilms,
} from 'actions/swUpdate';
import { compose } from 'redux';
import SwipeableViews from 'react-swipeable-views';

import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';

import RendererPeople from './RendererPeople';
import RendererSpecies from './RendererSpecies';
import RendererVehicles from './RendererVehicles';
import RendererStarships from './RendererStarships';
import RendererPlanets from './RendererPlanets';
import RendererFilms from './RendererFilms';
import RenderDefault from './RenderDefault';

import TabContent from './TabContent';
import {
  styles,
  TabWrapper,
} from './TabsSw.styles';

export const getLoadedList = (type, props) => {
  switch (type) {
    case 'people': return props.peopleList;
    case 'starships': return props.starshipsList;
    case 'vehicles': return props.vehiclesList;
    case 'species': return props.speciesList;
    case 'planets': return props.planetsList;
    case 'films': return props.filmsList;
    default: return null;
  }
};

export const getUpdateData = (type, props) => {
  switch (type) {
    case 'people': return props.updateSwPeople;
    case 'starships': return props.updateSwStarships;
    case 'vehicles': return props.updateSwVehicles;
    case 'species': return props.updateSwSpecies;
    case 'planets': return props.updateSwPlanets;
    case 'films': return props.updateSwFilms;
    default: return () => {};
  }
};

export const getRenderer = type => {
  switch (type) {
    case 'people':
      return RendererPeople;
    case 'species':
      return RendererSpecies;
    case 'starships':
      return RendererStarships;
    case 'planets':
      return RendererPlanets;
    case 'vehicles':
      return RendererVehicles;
    case 'films':
      return RendererFilms;
    default:
      return RenderDefault;
  }
};

export class TabsSw extends Component {
  constructor(props) {
    super(props);

    this.state = { currentTab: 0 };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(event, value) {
    this.setState({ currentTab: value });
  }

  render() {
    const { currentTab } = this.state;
    const {
      classes,
      tabsList,
    } = this.props;

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
            <TabWrapper key={tab.name}>
              <TabContent
                urlList={tab.list}
                content={tab.content}
                isActive={currentTab === key}
                loadedData={getLoadedList(tab.type, this.props)}
                updateData={getUpdateData(tab.type, this.props)}
                Render={getRenderer(tab.type)}
              />
            </TabWrapper>
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
  const planetsList = state.swPlanets.list;

  return {
    filmsList,
    peopleList,
    starshipsList,
    speciesList,
    vehiclesList,
    planetsList,
  };
};

const actions = {
  updateSwPeople,
  updateSwStarships,
  updateSwVehicles,
  updateSwSpecies,
  updateSwPlanets,
  updateSwFilms,
};

/* eslint-disable react/no-unused-prop-types */
TabsSw.propTypes = {
  classes: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
  filmsList: PropTypes.array.isRequired,
  peopleList: PropTypes.array.isRequired,
  planetsList: PropTypes.array.isRequired,
  speciesList: PropTypes.array.isRequired,
  starshipsList: PropTypes.array.isRequired,
  vehiclesList: PropTypes.array.isRequired,
  tabsList: PropTypes.array.isRequired,
  updateSwFilms: PropTypes.func.isRequired,
  updateSwPeople: PropTypes.func.isRequired,
  updateSwPlanets: PropTypes.func.isRequired,
  updateSwSpecies: PropTypes.func.isRequired,
  updateSwStarships: PropTypes.func.isRequired,
  updateSwVehicles: PropTypes.func.isRequired,
};

export default compose(
  connect(mapStateToProps, { ...actions }),
  withStyles(styles),
)(TabsSw);
