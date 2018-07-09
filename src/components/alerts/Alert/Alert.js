import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { ProgressBar, Main } from './Alert.styled';

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
    <Main>
      {renderProgressBar()}
      {msg}
    </Main>
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
