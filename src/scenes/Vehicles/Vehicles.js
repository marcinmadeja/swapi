import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSwVehicles } from 'actions/swVehicles';
import SwapiList from 'components/SwapiList/SwapiList';
import ListDetails from './ListDetails';

class Vehicles extends Component {
  render() {
    const {
      list,
      pending,
      errors,
    } = this.props;

    return (
      <SwapiList
        listName="vehicles"
        list={list}
        pending={pending}
        errors={errors}
        requestList={this.props.requestSwVehicles}
        ListDetails={ListDetails}
      />
    );
  }
}

const mapStateToProps = state => {
  const { list, pending, errors } = state.swVehicles;
  return { list, pending, errors };
};

export default connect(mapStateToProps, { requestSwVehicles })(Vehicles);

