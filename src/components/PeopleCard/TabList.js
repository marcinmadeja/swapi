import React from 'react';
import PropTypes from 'prop-types';
import { List } from './styles';
import TabListItem from './TabListItem';

const TabList = props => {
  const {
    urlList,
    emptyListMsg,
  } = props;
  if (!urlList.length) return emptyListMsg;

  return (
    <List>
      {urlList.map(url => (
        <TabListItem
          key={url}
          url={url}
          {...props}
        />
      ))}
    </List>
  );
};

TabList.propTypes = {
  urlList: PropTypes.array.isRequired,
  emptyListMsg: PropTypes.string.isRequired,
};

export default TabList;
