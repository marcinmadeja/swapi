import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSwStarships } from 'actions/swStarships';
import SwapiList from 'components/SwapiList/SwapiList';

class Starships extends Component {
  render() {
    const {
      list,
      pending,
      errors,
    } = this.props;

    return (
      <SwapiList
        listName="starships"
        list={list}
        pending={pending}
        errors={errors}
        requestList={this.props.requestSwStarships}
      />
    );
  }
}

const mapStateToProps = state => {
  const { list, pending, errors } = state.swStarships;
  return { list, pending, errors };
};

export default connect(mapStateToProps, { requestSwStarships })(Starships);
