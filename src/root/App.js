import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'components/grid';

import TopBar from 'layout/TopBar/TopBar';
import LeftDrawer from 'layout/LeftDrawer/LeftDrawer';
import RightDrawer from 'layout/RightDrawer/RightDrawer';

import Home from 'scenes/Home/Home';
import People from 'scenes/People/People';
import PeopleDetails from 'scenes/PeopleDetails/PeopleDetails';

import Species from 'scenes/Species/Species';
import SpeciesDetails from 'scenes/SpeciesDetails/SpeciesDetails';

import Planets from 'scenes/Planets/Planets';
import PlanetsDetails from 'scenes/PlanetsDetails/PlanetsDetails';

import Vehicles from 'scenes/Vehicles/Vehicles';
import VehiclesDetails from 'scenes/VehiclesDetails/VehiclesDetails';

import Starships from 'scenes/Starships/Starships';
import StarshipDetails from 'scenes/StarshipDetails/StarshipDetails';

import Films from 'scenes/Films/Films';
import FilmDetails from 'scenes/FilmDetails/FilmDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <TopBar />

          <Row>
            <Switch>
              <Route path="/films/:name/:id" component={FilmDetails} />
              <Route path="/films" component={Films} />

              <Route path="/people/:name/:id" component={PeopleDetails} />
              <Route path="/people" component={People} />

              <Route path="/species/:name/:id" component={SpeciesDetails} />
              <Route path="/species" component={Species} />

              <Route path="/planets/:name/:id" component={PlanetsDetails} />
              <Route path="/planets" component={Planets} />

              <Route path="/vehicles/:name/:id" component={VehiclesDetails} />
              <Route path="/vehicles" component={Vehicles} />

              <Route path="/starships/:name/:id" component={StarshipDetails} />
              <Route path="/starships" component={Starships} />

              <Route path="/" component={Home} />
            </Switch>
          </Row>

          <LeftDrawer />

          <RightDrawer />
        </Container>
      </Router>
    );
  }
}

export default App;
