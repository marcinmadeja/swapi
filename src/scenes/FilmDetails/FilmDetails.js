import React from 'react';
import { connect } from 'react-redux';
import { getFilmById } from 'actions/swFilms';
import DetailsPage from 'components/DetailsPage/DetailsPage';

import DefaultContent from './DefaultContent';
import DetailsHeader from './DetailsHeader';

const FilmDetails = ({
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
      name: 'characters',
      type: 'people',
      list: [],
      listName: 'characters',
    },
    {
      name: 'planets',
      type: 'planets',
      list: [],
      listName: 'planets',
    },
    {
      name: 'species',
      type: 'species',
      list: [],
      listName: 'species',
    },
    {
      name: 'starships',
      type: 'starships',
      list: [],
      listName: 'starships',
    },
    {
      name: 'vehicles',
      type: 'vehicles',
      list: [],
      listName: 'vehicles',
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
  const { pendingDetails, errorsDetails, list } = state.swFilms;
  return { pendingDetails, errorsDetails, list };
};

export default connect(mapStateToProps, { getItemById: getFilmById })(FilmDetails);
