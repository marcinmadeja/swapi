import React from 'react';
import { swapiService } from 'services';
import { ListItem } from './TabsSw.styles';

const rendererPeople = ({
  urlList,
  loadedData,
}) => {
  if (!urlList.length || !loadedData.length) return null;
  return urlList.map(url => {
    const detail = loadedData.find(details => details.url === url);
    if (!detail) return null;
    const { name, birth_year } = detail;
    const link = swapiService.generateLink(url, name, 'people');

    return (
      <ListItem key={url} to={link}>
        {name}<br />
        birth year: <strong>{birth_year}</strong>
      </ListItem>
    );
  });
};

export default rendererPeople;
