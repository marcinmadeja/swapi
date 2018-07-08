import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import BarUser from 'components/BarUser/BarUser';

import {
  styles,
  BarContainer,
  RightPanel,
} from './TopBar.styles';

export const TopBar = ({
  classes,
  user,
}) => {
  return (
    <AppBar className={classes.bar} color="primary">
      <BarContainer>
        <RightPanel>
          <BarUser user={user} />
        </RightPanel>
      </BarContainer>
    </AppBar>
  );
};

const mapStateToProps = state => {
  const { user } = state.user;
  return { user };
};

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(TopBar);
