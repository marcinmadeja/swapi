import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { userService } from 'services';

import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';

import { styles } from './BarUser.styles';

class BarUser extends Component {
  render() {
    const { classes, user } = this.props;

    return (
      <Fragment>
        <IconButton className={classes.avatarButton}>
          <Avatar
            alt="Adelle Charles"
            src={userService.getImg(user, 'large')}
            className={classes.avatar}
          />
        </IconButton>
      </Fragment>
    );
  }
}

BarUser.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default withStyles(styles)(BarUser);
