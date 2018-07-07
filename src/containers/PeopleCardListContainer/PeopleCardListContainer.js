import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestSwPeople } from 'actions/swPeople';
import { updateSwFilms, updateSwVehicles, updateSwStarships } from 'actions/swUpdate';

import PeopleCardList from 'components/PeopleCardList/PeopleCardList';
import PeopleCard from 'components/PeopleCard/PeopleCard';
import { AlertWarning, AlertStandard } from 'components/alerts';

export class PeopleCardListContainer extends Component {
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

PeopleCardListContainer.propTypes = {
  list: PropTypes.array.isRequired,
  pending: PropTypes.bool.isRequired,
  errors: PropTypes.bool.isRequired,

  filmsList: PropTypes.array.isRequired,
  starshipsList: PropTypes.array.isRequired,
  vehiclesList: PropTypes.array.isRequired,

  requestSwPeople: PropTypes.func.isRequired,
  updateSwFilms: PropTypes.func.isRequired,
  updateSwVehicles: PropTypes.func.isRequired,
  updateSwStarships: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { requestSwPeople, updateSwFilms, updateSwVehicles, updateSwStarships },
)(PeopleCardListContainer);
