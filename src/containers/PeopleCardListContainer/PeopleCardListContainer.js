import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSwPeople } from 'actions/swPeople';
import { updateSwFilms, updateSwVehicles, updateSwStarships } from 'actions/swUpdate';

import PeopleCardList from 'components/PeopleCardList/PeopleCardList';
import PeopleCard from 'components/PeopleCard/PeopleCard';
import { AlertWarning, AlertStandard } from 'components/alerts';

class PeopleCardListContainer extends Component {
  componentDidMount() {
    this.props.requestSwPeople();
  }

  render() {
    const {
      list,
      pending,
      errors,

      filmsList,
      starshipsList,
      vehiclesList,
    } = this.props;

    if (pending) return <AlertStandard msg="Loading data" progressBar />;
    if (errors) return <AlertWarning msg="There was an error" />;
    if (!list.length) return null;
    return (
      <PeopleCardList>
        {list.map(user => (
          <PeopleCard
            key={user.url}

            user={user}
            filmsList={filmsList}
            starshipsList={starshipsList}
            vehiclesList={vehiclesList}

            updateSwFilms={this.props.updateSwFilms}
            updateSwVehicles={this.props.updateSwVehicles}
            updateSwStarships={this.props.updateSwStarships}
          />
        ))}
      </PeopleCardList>
    );
  }
}

const mapStateToProps = state => {
  const { list, pending, errors } = state.swPeople;
  const filmsList = state.swFilms.list;
  const starshipsList = state.swStarships.list;
  const vehiclesList = state.swVehicles.list;

  return {
    list,
    pending,
    errors,
    filmsList,
    starshipsList,
    vehiclesList,
  };
};

export default connect(
  mapStateToProps,
  { requestSwPeople, updateSwFilms, updateSwVehicles, updateSwStarships },
)(PeopleCardListContainer);
