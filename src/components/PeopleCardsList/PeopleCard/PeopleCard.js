import React, { Component } from 'react';
import { Col } from 'components/grid';

import SwipeableViews from 'react-swipeable-views';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Tabs, { Tab } from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import HelpIcon from 'material-ui-icons/Help';
import ShoppingBasket from 'material-ui-icons/ShoppingBasket';
import ThumbDown from 'material-ui-icons/ThumbDown';
import ThumbUp from 'material-ui-icons/ThumbUp';
import Typography from 'material-ui/Typography';

import MenuIcon from 'material-ui-icons/Menu';
import HomeIcon from 'material-ui-icons/Home';
import PersonIcon from 'material-ui-icons/Person';
import PersonAddIcon from 'material-ui-icons/PersonAdd';
import MapIcon from 'material-ui-icons/Map';
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
      theme,
      classes,
      user,
    } = this.props;

    const { currentTab } = this.state;
    console.log('user', user);

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
            <TabContent render={() => (<TabBio userData={user} />)} />
            <TabContent render={() => (<TabFilms userData={user} />)} />
            <TabContent render={() => (<TabStarships userData={user} />)} />
            <TabContent render={() => (<TabVehicles userData={user} />)} />
          </SwipeableViews>
        </Card>
      </Col>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PeopleCard);
