import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import BarUser from 'components/BarUser/BarUser';

import {
  styles,
  BarContainer,
  RightPanel,
} from './TopBar.styles';

const TopBar = ({ classes }) => {
  return (
    <AppBar className={classes.bar} color="primary">
      <BarContainer>
        <RightPanel>
          <BarUser />
        </RightPanel>
      </BarContainer>
    </AppBar>
  );
};

export default withStyles(styles)(TopBar);
