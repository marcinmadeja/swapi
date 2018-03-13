import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { ProgressBar } from './Alert.styled';

const { Fragment } = React;

const propTypes = {
  icon: PropTypes.node,
  progressBar: PropTypes.bool,
  msg: PropTypes.string.isRequired,
};

const defaultProps = {
  progressBar: false,
  icon: null,
};

const AlertStandard = ({
  msg,
  progressBar,
  icon,
}) => {
  function renderProgressBar() {
    if (!progressBar) return null;
    return (
      <ProgressBar>
        <CircularProgress
          size={25}
          thickness={2}
        />
      </ProgressBar>
    );
  }

  return (
    <Fragment>
      {renderProgressBar()}
      {msg}
    </Fragment>
  );
};

AlertStandard.propTypes = propTypes;
AlertStandard.defaultProps = defaultProps;

export default AlertStandard;
