import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSwPeople } from 'actions/swPeople';
import SwapiList from 'components/SwapiList/SwapiList';
import ListDetails from './ListDetails';

class People extends Component {
  render() {
    const {
      list,
      pending,
      errors,
    } = this.props;

    return (
      <SwapiList
        listName="people"
        list={list}
        pending={pending}
        errors={errors}
        requestList={this.props.requestSwPeople}
        ListDetails={ListDetails}
      />
    );
  }
}

const mapStateToProps = state => {
  const { list, pending, errors } = state.swPeople;
  return { list, pending, errors };
};

export default connect(mapStateToProps, { requestSwPeople })(People);
