import React from 'react';
import { swapiService } from 'services';
import { ListItem } from './TabsSw.styles';

export const RendererVehicles = ({
  urlList,
  loadedData,
}) => {
  if (!urlList.length || !loadedData.length) return null;
  return urlList.map(url => {
    const detail = loadedData.find(details => details.url === url);
    if (!detail) return null;
    const { name, model } = detail;
    const link = swapiService.generateLink(url, name, 'vehicles');

    return (
      <ListItem key={url} to={link}>
        {name}<br />
        model: <strong>{model}</strong>
      </ListItem>
    );
  });
};

export default RendererVehicles;
