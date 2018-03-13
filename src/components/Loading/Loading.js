import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';

import { Component, Label } from './Loading.styles';

const propTypes = {
  loadingLabel: PropTypes.string.isRequired,
  full: PropTypes.bool,
  fullHeight: PropTypes.bool,
};

const defaultProps = {
  full: false,
  fullHeight: false,
};

const Loading = ({ loadingLabel, full, fullHeight }) => {
  return (
    <Component full={full} fullHeight={fullHeight}>
      <CircularProgress size={100} thickness={2} />
      <Label>{loadingLabel}</Label>
    </Component>
  );
};

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;
