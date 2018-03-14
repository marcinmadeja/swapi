import React, { Component, Fragment } from 'react';
import { Container, Row } from 'components/grid';

import TopBar from 'layout/TopBar/TopBar';
import LeftDrawer from 'layout/LeftDrawer/LeftDrawer';
import RightDrawer from 'layout/RightDrawer/RightDrawer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <TopBar />

          <Row>
            xxx
          </Row>

          <LeftDrawer />

          <RightDrawer />
        </Container>
      </Fragment>
    );
  }
}

export default App;
