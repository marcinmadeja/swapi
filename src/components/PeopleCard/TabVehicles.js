import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from './styles';

const Vehicle = ({ url, loadedData }) => {
  const filmDetails = loadedData.find(details => details.url === url);
  if (!filmDetails) return null;
  return (
    <ListItem>{filmDetails.name}</ListItem>
  );
};

const TabVehicles = ({
  urlList,
  loadedData,
}) => {
  if (!urlList.length) return 'no vehicle';

  return (
    <List>
      {urlList.map(url => <Vehicle key={url} url={url} loadedData={loadedData} />)}
    </List>
  );
};

Vehicle.propTypes = {
  url: PropTypes.string.isRequired,
  loadedData: PropTypes.array.isRequired,
};

TabVehicles.propTypes = {
  urlList: PropTypes.array.isRequired,
  loadedData: PropTypes.array.isRequired,
};

export default TabVehicles;
