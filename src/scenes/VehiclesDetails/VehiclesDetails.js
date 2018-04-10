import React from 'react';
import { connect } from 'react-redux';
import { getVehicleById } from 'actions/swVehicles';
import DetailsPage from 'components/DetailsPage/DetailsPage';

import DefaultContent from './DefaultContent';
import DetailsHeader from './DetailsHeader';

const VehiclesDetails = ({
  pendingDetails,
  errorsDetails,
  list,
  match,
  // redux
  getItemById,
}) => {
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
  const { pendingDetails, errorsDetails, list } = state.swVehicles;
  return { pendingDetails, errorsDetails, list };
};

export default connect(mapStateToProps, { getItemById: getVehicleById })(VehiclesDetails);
