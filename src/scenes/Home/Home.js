import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestSwPeople } from 'actions/swPeople';

import { AlertWarning, AlertStandard } from 'components/alerts';
import PeopleCardsList from 'components/PeopleCardsList/PeopleCardsList';

export class Home extends Component {
  componentDidMount() {
    this.props.requestSwPeople();
  }

  render() {
    const {
      list,
      pending,
      errors,
    } = this.props;

    if (pending) return <AlertStandard msg="Loading data" progressBar />;
    if (errors) return <AlertWarning msg="There was an error" />;
    if (!list.length) return null;
    return <PeopleCardsList users={list} />;
  }
}

const mapStateToProps = state => {
  const { list, pending, errors } = state.swPeople;
  return { list, pending, errors };
};

Home.propTypes = {
  requestSwPeople: PropTypes.func.isRequired,
  pending: PropTypes.bool,
  errors: PropTypes.bool,
  list: PropTypes.array,
};

Home.defaultProps = {
  pending: false,
  errors: false,
  list: [],
};

export default connect(mapStateToProps, { requestSwPeople })(Home);
