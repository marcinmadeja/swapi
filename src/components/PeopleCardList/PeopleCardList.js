import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PeopleCardsList = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

PeopleCardsList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PeopleCardsList;
