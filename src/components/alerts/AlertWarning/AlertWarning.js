import React from 'react';
import Alert from '../Alert/Alert';
import { AlertWarningStyled } from '../Alert/Alert.styled';

const AlertWarning = (props) => {
  return (
    <AlertWarningStyled>
      <Alert {...props} />
    </AlertWarningStyled>
  );
};

export default AlertWarning;
