import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSwPeople } from 'actions/swPeople';

import { AlertWarning, AlertStandard } from 'components/alerts';
import PeopleCardsList from 'components/PeopleCardsList/PeopleCardsList';

class Home extends Component {
  componentDidMount() {
    this.props.requestSwPeople();
  }

  render() {
    const {
      peopleData,
      pending,
      errors,
    } = this.props;

    if (pending) return <AlertStandard msg="Loading data" progressBar />;
    if (errors) return <AlertWarning msg="There was an error" />;
    if (!peopleData) return null;
    return <PeopleCardsList users={peopleData.results} />;
  }
}

const mapStateToProps = state => {
  const { peopleData, pending, errors } = state.swPeople;
  return { peopleData, pending, errors };
};

export default connect(mapStateToProps, { requestSwPeople })(Home);
