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
import {
  styles,
  TabWrapper,
  DefaultTab,
  ListItem,
} from './TabsSw.styles';

class TabsSw extends Component {
  constructor(props) {
    super(props);

    this.state = { currentTab: 0 };
    this.handleTabChange = this.handleTabChange.bind(this);
    this.renderDefault = this.renderDefault.bind(this);
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
      case 'planets': return this.props.planetsList;
      default: return null;
    }
  }

  getUpdateData(type) {
    switch (type) {
      case 'people': return this.props.updateSwPeople;
      case 'starships': return this.props.updateSwStarships;
      case 'vehicles': return this.props.updateSwVehicles;
      case 'species': return this.props.updateSwSpecies;
      case 'planets': return this.props.updateSwPlanets;
      default: return () => {};
    }
  }

  getRenderer(type) {
    switch (type) {
      case 'people':
        return this.rendererPeople;
      case 'species':
        return this.rendererSpecies;
      case 'starships':
        return this.rendererStarships;
      case 'planets':
        return this.rendererPlanets;
      case 'vehicles':
        return this.rendererVehicles;
      default: return this.renderDefault;
    }
  }

  rendererPeople(urlList, loadedData) {
    if (!urlList || !loadedData) return null;
    return urlList.map(url => {
      const filmDetails = loadedData.find(details => details.url === url);
      if (!filmDetails) return null;
      const { name, birth_year } = filmDetails;

      return (
        <ListItem key={url}>
          {name}<br />
          birth year: <strong>{birth_year}</strong>
        </ListItem>
      );
    });
  }

  rendererSpecies(urlList, loadedData) {
    if (!urlList || !loadedData) return null;
    return urlList.map(url => {
      const filmDetails = loadedData.find(details => details.url === url);
      if (!filmDetails) return null;
      const { name, classification, language } = filmDetails;

      return (
        <ListItem key={url}>
          {name} (classification: {classification})<br />
          language: <strong>{language}</strong>
        </ListItem>
      );
    });
  }

  rendererVehicles(urlList, loadedData) {
    if (!urlList || !loadedData) return null;
    return urlList.map(url => {
      const filmDetails = loadedData.find(details => details.url === url);
      if (!filmDetails) return null;
      const { name, model } = filmDetails;

      return (
        <ListItem key={url}>
          {name}<br />
          model: <strong>{model}</strong>
        </ListItem>
      );
    });
  }

  rendererStarships(urlList, loadedData) {
    if (!urlList || !loadedData) return null;
    return urlList.map(url => {
      const filmDetails = loadedData.find(details => details.url === url);
      if (!filmDetails) return null;
      const { name, model, manufacturer } = filmDetails;

      return (
        <ListItem key={url}>
          {name}<br />
          model: <strong>{model}</strong><br />
          manufacturer: <strong>{manufacturer}</strong>
        </ListItem>
      );
    });
  }


  rendererPlanets(urlList, loadedData) {
    if (!urlList || !loadedData) return null;
    return urlList.map(url => {
      const filmDetails = loadedData.find(details => details.url === url);
      if (!filmDetails) return null;
      const { name, population, climate } = filmDetails;

      return (
        <ListItem key={url}>
          {name} (population: {population})<br />
          climate: <strong>{climate}</strong>
        </ListItem>
      );
    });
  }

  renderDefault() {
    return <DefaultTab>{this.props.details.opening_crawl}</DefaultTab>;
  }

  render() {
    const { currentTab } = this.state;
    const {
      classes,
      tabsList,
      details,
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
                name={tab.name}
                urlList={tab.list}
                isActive={currentTab === key}
                loadedData={this.getLoadedList(tab.type)}
                updateData={this.getUpdateData(tab.type)}
                render={this.getRenderer(tab.type)}
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
};

export default compose(
  connect(mapStateToProps, { ...actions }),
  withStyles(styles),
)(TabsSw);
