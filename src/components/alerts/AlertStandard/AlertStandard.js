import React from 'react';
import Alert from '../Alert/Alert';
import { AlertStandardStyled } from '../Alert/Alert.styled';

const AlertStandard = (props) => {
  return (
    <AlertStandardStyled>
      <Alert {...props} />
    </AlertStandardStyled>
  );
};

export default AlertStandard;
