import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Row } from 'components/grid';

import TopBar from 'layout/TopBar/TopBar';
import LeftDrawer from 'layout/LeftDrawer/LeftDrawer';
import RightDrawer from 'layout/RightDrawer/RightDrawer';

import Home from 'scenes/Home/Home';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <TopBar />

          <Row>
            <Switch>
              <Route
                path="/"
                component={Home}
              />
            </Switch>
          </Row>

          <LeftDrawer />

          <RightDrawer />
        </Container>
      </Fragment>
    );
  }
}

export default App;
