import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { requestUser } from 'actions/user';

import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import api from 'services/api';

import {
  styles,
  ComponentContainer,
  FormContainer,
} from './SignIn.styles';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.props.requestUser();
  }

  render() {
    const {
      theme,
      classes,
    } = this.props;
    console.log('props', this.props);

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
        </FormContainer>
      </ComponentContainer>
    );
  }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(null, { requestUser }),
)(SignIn);
