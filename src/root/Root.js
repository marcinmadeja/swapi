import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignIn from 'scenes/SignIn/SignIn';
import App from './App';

class Root extends Component {
  render() {
    const { user } = this.props;

    if (!user) return <SignIn />;

    return (
      <App />
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state.user;
  return { user };
};

Root.propTypes = {
  user: PropTypes.object,
};

Root.defaultProps = {
  user: null,
};

export default connect(mapStateToProps)(Root);
