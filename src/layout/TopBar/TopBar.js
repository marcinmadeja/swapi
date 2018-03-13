import React from 'react';
import AppBar from 'material-ui/AppBar';
import BarUser from 'components/BarUser/BarUser';
import {
  BarContainer,
  RightPanel,
} from './TopBar.styles';

const TopBar = () => {
  return (
    <AppBar color="primary">
      <BarContainer>
        <RightPanel>
          <BarUser />
        </RightPanel>
      </BarContainer>
    </AppBar>
  );
};

export default TopBar;
