import React from 'react';
import PropTypes from 'prop-types';
import { ContainerStyled } from './Container.styles';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

const defaultProps = {
  children: null,
};

const Container = (props) => {
  const { children } = props;

  return (
    <ContainerStyled {...props}>
      {children}
    </ContainerStyled>
  );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
