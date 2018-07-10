import React from 'react';
import { swapiService } from 'services';
import { ListItem } from './TabsSw.styles';

export const RendererPlanets = ({
  urlList,
  loadedData,
}) => {
  if (!urlList.length || !loadedData.length) return null;
  return urlList.map(url => {
    const detail = loadedData.find(details => details.url === url);
    if (!detail) return null;
    const { name, population, climate } = detail;
    const link = swapiService.generateLink(url, name, 'planets');

    return (
      <ListItem key={url} to={link}>
        {name} (population: {population})<br />
        climate: <strong>{climate}</strong>
      </ListItem>
    );
  });
};

export default RendererPlanets;
