import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from './styles';

const TabListItem = ({
  url,
  loadedData,
  titleKey,
}) => {
  const details = loadedData.find(detail => detail.url === url);
  if (!details) return null;
  return (
    <ListItem>{details[titleKey]}</ListItem>
  );
};

TabListItem.propTypes = {
  url: PropTypes.string.isRequired,
  loadedData: PropTypes.array.isRequired,
  titleKey: PropTypes.string.isRequired,
};

export default TabListItem;
