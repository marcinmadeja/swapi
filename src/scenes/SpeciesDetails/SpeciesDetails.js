import React from 'react';
import { connect } from 'react-redux';
import { getSpeciesById } from 'actions/swSpecies';
import DetailsPage from 'components/DetailsPage/DetailsPage';

import DefaultContent from './DefaultContent';
import DetailsHeader from './DetailsHeader';

const SpeciesDetails = ({
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
      name: 'people',
      listName: 'people',
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
  const { pendingDetails, errorsDetails, list } = state.swSpecies;
  return { pendingDetails, errorsDetails, list };
};

export default connect(mapStateToProps, { getItemById: getSpeciesById })(SpeciesDetails);
