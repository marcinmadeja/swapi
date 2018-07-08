import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPeopleById } from 'actions/swPeople';
import DetailsPage from 'components/DetailsPage/DetailsPage';

import DefaultContent from './DefaultContent';
import DetailsHeader from './DetailsHeader';

export const PeopleDetails = ({
  pendingDetails,
  errorsDetails,
  list,
  match,
  getItemById,
}) => {
  const tabsList = [
    {
      name: 'Details',
      content: DefaultContent,
    },
    {
      name: 'species',
      listName: 'species',
      type: 'species',
      list: [],
    },
    {
      name: 'vehicles',
      listName: 'vehicles',
      type: 'vehicles',
      list: [],
    },
    {
      name: 'starships',
      listName: 'starships',
      type: 'starships',
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
  const { pendingDetails, errorsDetails, list } = state.swPeople;
  return { pendingDetails, errorsDetails, list };
};

PeopleDetails.propTypes = {
  pendingDetails: PropTypes.bool,
  errorsDetails: PropTypes.bool,
  list: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  getItemById: PropTypes.func.isRequired,
};

PeopleDetails.defaultProps = {
  pendingDetails: false,
  errorsDetails: false,
};

export default connect(mapStateToProps, { getItemById: getPeopleById })(PeopleDetails);
