import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'components/grid';

import SwipeableViews from 'react-swipeable-views';
import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';
import Tabs, { Tab } from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';

import PersonIcon from 'material-ui-icons/Person';
import DirectionsCarIcon from 'material-ui-icons/DirectionsCar';
import LocalAirportIcon from 'material-ui-icons/LocalAirport';
import LocalMoviesIcon from 'material-ui-icons/LocalMovies';

import TabContent from './TabContent';
import TabBio from './TabBio';
import TabFilms from './TabFilms';
import TabStarships from './TabStarships';
import TabVehicles from './TabVehicles';

import {
  styles,
  Title,
  TitlePicture,
  UserName,
} from './PeopleCard.styles';

class PeopleCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0,
    };

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(event, value) {
    this.setState({ currentTab: value });
  }

  render() {
    const {
      classes,
      user,
    } = this.props;

    const { currentTab } = this.state;

    return (
      <Col md={4}>
        <Card className={classes.card}>
          <Title>
            <TitlePicture>
              <PersonIcon />
            </TitlePicture>

            <UserName>{user.name}</UserName>
          </Title>

          <Tabs
            value={currentTab}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            className={classes.tabsRoot}
          >
            <Tab className={classes.tabRoot} label="Bio" icon={<PhoneIcon />} />
            <Tab className={classes.tabRoot} label="Films" icon={<LocalMoviesIcon />} />
            <Tab className={classes.tabRoot} label="Starships" icon={<LocalAirportIcon />} />
            <Tab className={classes.tabRoot} label="Vehicles" icon={<DirectionsCarIcon />} />
          </Tabs>

          <SwipeableViews
            index={currentTab}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContent forceLoaded render={() => (<TabBio userData={user} />)} />

            <TabContent
              isActive={currentTab === 1}
              urlList={user.films}
              loadedData={this.props.filmsList}
              updateData={this.props.updateSwFilms}
              render={(urlList, loadedData) => (<TabFilms urlList={urlList} loadedData={loadedData} />)}
            />

            <TabContent
              isActive={currentTab === 2}
              urlList={user.starships}
              loadedData={this.props.starshipsList}
              updateData={this.props.updateSwStarships}
              render={(urlList, loadedData) => (<TabStarships urlList={urlList} loadedData={loadedData} />)}
            />

            <TabContent
              isActive={currentTab === 3}
              urlList={user.vehicles}
              loadedData={this.props.vehiclesList}
              updateData={this.props.updateSwVehicles}
              render={(urlList, loadedData) => (<TabVehicles urlList={urlList} loadedData={loadedData} userData={user} />)}
            />

          </SwipeableViews>
        </Card>
      </Col>
    );
  }
}

PeopleCard.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,

  filmsList: PropTypes.array.isRequired,
  starshipsList: PropTypes.array.isRequired,
  vehiclesList: PropTypes.array.isRequired,

  updateSwFilms: PropTypes.func.isRequired,
  updateSwVehicles: PropTypes.func.isRequired,
  updateSwStarships: PropTypes.func.isRequired,
};

export default withStyles(styles)(PeopleCard);
