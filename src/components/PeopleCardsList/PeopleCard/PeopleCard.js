import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSwFilms } from 'actions/swUpdate';
import { compose } from 'redux';
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
              name={user.name}
              isActive={currentTab === 1}
              urlList={user.films}
              loadedData={this.props.filmsList}
              updateData={this.props.updateSwFilms}
              render={() => (<TabFilms userData={user} />)}
            />

            <TabContent render={() => (<TabStarships userData={user} />)} />

            <TabContent render={() => (<TabVehicles userData={user} />)} />
          </SwipeableViews>
        </Card>
      </Col>
    );
  }
}

const mapStateToProps = state => {
  const filmsList = state.swFilms.list;
  return {
    filmsList,
  };
};

export default compose(
  connect(mapStateToProps, { updateSwFilms }),
  withStyles(styles),
)(PeopleCard);
