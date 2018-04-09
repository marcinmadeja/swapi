import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSwSpecies } from 'actions/swSpecies';
import SwapiList from 'components/SwapiList/SwapiList';
import ListDetails from './ListDetails';

class Species extends Component {
  render() {
    const {
      list,
      pending,
      errors,
    } = this.props;

    return (
      <SwapiList
        listName="species"
        list={list}
        pending={pending}
        errors={errors}
        requestList={this.props.requestSwSpecies}
        ListDetails={ListDetails}
      />
    );
  }
}

const mapStateToProps = state => {
  const { list, pending, errors } = state.swSpecies;
  return { list, pending, errors };
};

export default connect(mapStateToProps, { requestSwSpecies })(Species);
