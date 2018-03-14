import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { requestUser } from 'actions/user';
import { requestUserList } from 'actions/usersList';

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
    this.props.requestUserList();
  }

  onButtonClick() {
    this.props.requestUser();
  }

  render() {
    const {
      theme,
      classes,
      errors,
    } = this.props;

    return (
      <ComponentContainer theme={theme}>
        <FormContainer theme={theme} autoComplete="off">
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
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  errors: PropTypes.bool,
  requestUser: PropTypes.func.isRequired,
  requestUserList: PropTypes.func.isRequired,
};

SignIn.defaultProps = {
  errors: false,
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(null, { requestUser, requestUserList }),
)(SignIn);
