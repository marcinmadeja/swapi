import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStarshipById } from 'actions/swStarships';
import DetailsPage from 'components/DetailsPage/DetailsPage';
import Info from './Info';

const DefaultContent = ({
  details: {
    cost_in_credits,
    length,
    crew,
    passengers,
    starship_class,
  },
}) => {
  return (
    <div>
      starship class: <strong>{starship_class}</strong><br />
      crew: <strong>{crew}</strong><br />
      passengers: <strong>{passengers}</strong><br />
      cost in credits: <strong>{cost_in_credits}</strong><br />
      length: <strong>{length}</strong><br />
    </div>
  );
};

const DetailsHeader = ({ details }) => {
  return (
    <Info
      name={details.name}
      model={details.model}
      manufacturer={details.manufacturer}
    />
  );
};

const tabsList = [
  {
    name: 'Crawl',
    content: DefaultContent,
  },
  {
    name: 'pilots',
    type: 'people',
    list: [],
    listName: 'pilots',
  },
  {
    name: 'films',
    type: 'films',
    list: [],
    listName: 'films',
  },
];

class StarshipDetails extends Component {
  render() {
    const {
      pendingDetails,
      errorsDetails,
      list,
      match,
    } = this.props;

    return (
      <DetailsPage
        pendingDetails={pendingDetails}
        errorsDetails={errorsDetails}
        list={list}
        getItemById={this.props.getStarshipById}
        match={match}
        tabsList={tabsList}
        detailsHeader={DetailsHeader}
      />
    );
  }
}

const mapStateToProps = state => {
  const { pendingDetails, errorsDetails, list } = state.swStarships;
  return { pendingDetails, errorsDetails, list };
};

export default connect(mapStateToProps, { getStarshipById })(StarshipDetails);
