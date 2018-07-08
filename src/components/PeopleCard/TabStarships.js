import React from 'react';
import { List, ListItem } from './styles';

const Starship = ({ url, loadedData }) => {
  const filmDetails = loadedData.find(details => details.url === url);
  if (!filmDetails) return null;
  return (
    <ListItem>{filmDetails.name}</ListItem>
  );
};


const TabStarships = ({
  urlList,
  loadedData,
}) => {
  if (!urlList.length) return 'no starships';

  return (
    <List>
      {urlList.map(url => <Starship key={url} url={url} loadedData={loadedData} />)}
    </List>
  );
};

export default TabStarships;
