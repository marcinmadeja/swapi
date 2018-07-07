import React from 'react';
import { List, ListItem } from './PeopleCard.styles';

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

export default TabVehicles;
