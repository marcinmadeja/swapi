import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSwStarships } from 'actions/swStarships';

import { AlertWarning, AlertStandard } from 'components/alerts';
import StarshipsList from './StarshipsList/StarshipsList';

class Starships extends Component {
  componentDidMount() {
    this.props.requestSwStarships();
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

    return <StarshipsList list={list} />;
  }
}

const mapStateToProps = state => {
  const { list, pending, errors } = state.swStarships;
  return { list, pending, errors };
};

export default connect(mapStateToProps, { requestSwStarships })(Starships);
