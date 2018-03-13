import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignIn from 'scenes/SignIn/SignIn';
import Loading from 'components/Loading/Loading';
import { AlertWarning } from 'components/alerts';
import 'normalize.css';
import 'styles/main.css';
import App from './App';

class Root extends Component {
  render() {
    const { user, pending, errors } = this.props;
    if (pending) return <Loading full loadingLabel="Login in progress" />;
    if (!user) return <SignIn errors={errors} />;

    return (
      <App />
    );
  }
}

const mapStateToProps = (state) => {
  const { user, pending, errors } = state.user;
  return { user, pending, errors };
};

Root.propTypes = {
  user: PropTypes.object,
};

Root.defaultProps = {
  user: null,
};

export default connect(mapStateToProps)(Root);
