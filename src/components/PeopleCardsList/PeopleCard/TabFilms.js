import React from 'react';
import { List, ListItem } from './PeopleCard.styles';

const Film = ({ url, loadedData }) => {
  const filmDetails = loadedData.find(details => details.url === url);
  if (!filmDetails) return null;
  return (
    <ListItem>{filmDetails.title}</ListItem>
  );
};

const TabFilms = ({
  urlList,
  loadedData,
}) => {
  if (!urlList.length) return 'no movies';

  return (
    <List>
      {urlList.map(url => <Film key={url} url={url} loadedData={loadedData} />)}
    </List>
  );
};

export default TabFilms;
