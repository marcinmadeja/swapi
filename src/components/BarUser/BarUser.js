import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { userService } from 'services';

import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';

import { styles } from './BarUser.styles';

class BarUser extends Component {
  render() {
    const { classes, user } = this.props;
    console.log('user', user);
    return (
      <Fragment>
        <IconButton className={classes.avatarButton}>
          <Avatar
            alt="Adelle Charles"
            src={userService.getImg('large', user)}
            className={classes.avatar}
          />
        </IconButton>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state.user;
  return { user };
};

BarUser.propTypes = {
  user: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
)(BarUser);
