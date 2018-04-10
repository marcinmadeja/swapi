import React from 'react';
import { connect } from 'react-redux';
import { getPlanetById } from 'actions/swPlanets';
import DetailsPage from 'components/DetailsPage/DetailsPage';

import DefaultContent from './DefaultContent';
import DetailsHeader from './DetailsHeader';

const PlanetsDetails = ({
  pendingDetails,
  errorsDetails,
  list,
  match,
  // redux
  getItemById,
}) => {
  const tabsList = [
    {
      name: 'Details',
      content: DefaultContent,
    },
    {
      name: 'residents',
      listName: 'residents',
      type: 'people',
      list: [],
    },
    {
      name: 'films',
      listName: 'films',
      type: 'films',
      list: [],
    },
  ];

  return (
    <DetailsPage
      pendingDetails={pendingDetails}
      errorsDetails={errorsDetails}
      list={list}
      getItemById={getItemById}
      match={match}
      tabsList={tabsList}
      detailsHeader={DetailsHeader}
    />
  );
};

const mapStateToProps = state => {
  const { pendingDetails, errorsDetails, list } = state.swPlanets;
  return { pendingDetails, errorsDetails, list };
};

export default connect(mapStateToProps, { getItemById: getPlanetById })(PlanetsDetails);
