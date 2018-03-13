import React from 'react';
import PropTypes from 'prop-types';
import { ColStyled } from './Col.styles';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

const defaultProps = {
  children: null,
};

const Col = (props) => {
  return (
    <ColStyled {...props}>
      {props.children}
    </ColStyled>
  );
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
