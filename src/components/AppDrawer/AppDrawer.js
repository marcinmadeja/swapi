import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';

import {
  styles,
  DrawerContainer,
} from './AppDrawer.styles';

class AppDrawer extends Component {
  render() {
    const {
      classes,
      children,
      extend = false,
      anchor = 'left',
    } = this.props;

    const paperClass = classNames(classes.paper, { [classes.paperExtend]: extend });

    return (
      <Drawer
        classes={{ paper: paperClass }}
        variant="persistent"
        anchor={anchor}
        open
      >
        <DrawerContainer>
          {children}
        </DrawerContainer>
      </Drawer>
    );
  }
}

export default withStyles(styles)(AppDrawer);
