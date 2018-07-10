import React from 'react';
import PropTypes from 'prop-types';
import { DefaultTab } from './TabsSw.styles';

export const RenderDefault = ({ content }) => {
  return <DefaultTab>{content}</DefaultTab>;
};

RenderDefault.propTypes = {
  content: PropTypes.node.isRequired,
};

export default RenderDefault;
