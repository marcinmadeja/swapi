import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSwPlanets } from 'actions/swPlanets';
import SwapiList from 'components/SwapiList/SwapiList';
import ListDetails from './ListDetails';

class Planets extends Component {
  render() {
    const {
      list,
      pending,
      errors,
    } = this.props;

    return (
      <SwapiList
        listName="planets"
        list={list}
        pending={pending}
        errors={errors}
        requestList={this.props.requestSwPlanets}
        ListDetails={ListDetails}
      />
    );
  }
}

const mapStateToProps = state => {
  const { list, pending, errors } = state.swPlanets;
  return { list, pending, errors };
};

export default connect(mapStateToProps, { requestSwPlanets })(Planets);
