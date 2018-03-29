import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Row } from 'components/grid';

import TopBar from 'layout/TopBar/TopBar';
import LeftDrawer from 'layout/LeftDrawer/LeftDrawer';
import RightDrawer from 'layout/RightDrawer/RightDrawer';

import Home from 'scenes/Home/Home';
import People from 'scenes/People/People';
import Species from 'scenes/Species/Species';
import Planets from 'scenes/Planets/Planets';
import Vehicles from 'scenes/Vehicles/Vehicles';
import Starships from 'scenes/Starships/Starships';
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

              <Route path="/People" component={People} />
              <Route path="/Species" component={Species} />
              <Route path="/Planets" component={Planets} />
              <Route path="/Vehicles" component={Vehicles} />
              <Route path="/Starships" component={Starships} />
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
