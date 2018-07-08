import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { ProgressBar } from './Alert.styled';

const AlertStandard = ({
  msg,
  progressBar,
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
    <div>
      {renderProgressBar()}
      {msg}
    </div>
  );
};

AlertStandard.propTypes = {
  progressBar: PropTypes.bool,
  msg: PropTypes.string.isRequired,
};

AlertStandard.defaultProps = {
  progressBar: false,
};

export default AlertStandard;
