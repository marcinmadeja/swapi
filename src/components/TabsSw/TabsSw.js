import React, { Component, Fragment } from 'react';
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
import { swapiService } from 'services';

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
      case 'films': return this.props.filmsList;
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
      case 'films': return this.props.updateSwFilms;
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
      case 'films':
        return this.rendererFilms;
      default:
        return this.renderDefault;
    }
  }

  rendererPeople(urlList, loadedData) {
    if (!urlList || !loadedData) return null;
    return urlList.map(url => {
      const detail = loadedData.find(details => details.url === url);
      if (!detail) return null;
      const { name, birth_year } = detail;
      const link = swapiService.generateLink(url, name, 'people');

      return (
        <ListItem key={url} to={link}>
          {name}<br />
          birth year: <strong>{birth_year}</strong>
        </ListItem>
      );
    });
  }

  rendererSpecies(urlList, loadedData) {
    if (!urlList || !loadedData) return null;
    return urlList.map(url => {
      const detail = loadedData.find(details => details.url === url);
      if (!detail) return null;
      const { name, classification, language } = detail;
      const link = swapiService.generateLink(url, name, 'species');

      return (
        <ListItem key={url} to={link}>
          {name} (classification: {classification})<br />
          language: <strong>{language}</strong>
        </ListItem>
      );
    });
  }

  rendererVehicles(urlList, loadedData) {
    if (!urlList || !loadedData) return null;
    return urlList.map(url => {
      const detail = loadedData.find(details => details.url === url);
      if (!detail) return null;
      const { name, model } = detail;
      const link = swapiService.generateLink(url, name, 'vehicles');

      return (
        <ListItem key={url} to={link}>
          {name}<br />
          model: <strong>{model}</strong>
        </ListItem>
      );
    });
  }

  rendererStarships(urlList, loadedData) {
    if (!urlList || !loadedData) return null;
    return urlList.map(url => {
      const detail = loadedData.find(details => details.url === url);
      if (!detail) return null;
      const { name, model, manufacturer } = detail;
      const link = swapiService.generateLink(url, name, 'starships');

      return (
        <ListItem key={url} to={link}>
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
      const detail = loadedData.find(details => details.url === url);
      if (!detail) return null;
      const { name, population, climate } = detail;
      const link = swapiService.generateLink(url, name, 'planets');

      return (
        <ListItem key={url} to={link}>
          {name} (population: {population})<br />
          climate: <strong>{climate}</strong>
        </ListItem>
      );
    });
  }

  rendererFilms(urlList, loadedData) {
    if (!urlList || !loadedData) return null;
    return urlList.map(url => {
      const detail = loadedData.find(details => details.url === url);
      if (!detail) return null;
      const { title, release_date } = detail;
      const link = swapiService.generateLink(url, title, 'films');

      return (
        <ListItem key={url} to={link}>
          {title}<br />
          release date <strong>{release_date}</strong>
        </ListItem>
      );
    });
  }

  renderDefault(content) {
    return <DefaultTab>{content}</DefaultTab>;
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
  updateSwFilms,
};

export default compose(
  connect(mapStateToProps, { ...actions }),
  withStyles(styles),
)(TabsSw);
