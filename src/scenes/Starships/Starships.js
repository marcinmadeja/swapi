import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSwStarships } from 'actions/swStarships';
import SwapiList from 'components/SwapiList/SwapiList';
import ListDetails from './ListDetails';

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
        ListDetails={ListDetails}
      />
    );
  }
}

const mapStateToProps = state => {
  const { list, pending, errors } = state.swStarships;
  return { list, pending, errors };
};

export default connect(mapStateToProps, { requestSwStarships })(Starships);
