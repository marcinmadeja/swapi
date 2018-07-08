import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      extend,
      anchor,
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

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  extend: PropTypes.bool,
  anchor: PropTypes.string,
};

AppDrawer.defaultProps = {
  anchor: 'left',
  extend: false,
};

export default withStyles(styles)(AppDrawer);
