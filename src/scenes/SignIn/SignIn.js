import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { requestUser } from 'actions/user';
import {
  requestUsersList,
  requestUsersListLastAdded,
  requestUsersListFriends,
} from 'actions/usersList';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import { AlertWarning } from 'components/alerts';

import {
  styles,
  ComponentContainer,
  FormContainer,
  AlertContainer,
} from './SignIn.styles';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentDidMount() {
    this.props.requestUser();
    this.props.requestUsersList();
    this.props.requestUsersListLastAdded();
    this.props.requestUsersListFriends();
  }

  onButtonClick() {
    this.props.requestUser();
  }

  render() {
    const {
      classes,
      errors,
    } = this.props;

    return (
      <ComponentContainer>
        <FormContainer autoComplete="off">
          <TextField
            label="Login"
            className={classes.input}
            fullWidth
          />

          <TextField
            label="Password"
            type="password"
            className={classes.input}
            fullWidth
          />

          <Button onClick={this.onButtonClick} variant="raised" color="primary" fullWidth>Sign in</Button>

          {errors && <AlertContainer><AlertWarning msg="User was not logged in" /></AlertContainer>}
        </FormContainer>
      </ComponentContainer>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  errors: PropTypes.bool,
  requestUser: PropTypes.func.isRequired,
  requestUsersList: PropTypes.func.isRequired,
  requestUsersListLastAdded: PropTypes.func.isRequired,
  requestUsersListFriends: PropTypes.func.isRequired,
};

SignIn.defaultProps = {
  errors: false,
};

export default compose(
  withStyles(styles),
  connect(null, { requestUser, requestUsersList, requestUsersListLastAdded, requestUsersListFriends }),
)(SignIn);
