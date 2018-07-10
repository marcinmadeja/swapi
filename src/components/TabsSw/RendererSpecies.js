import React from 'react';
import { swapiService } from 'services';
import { ListItem } from './TabsSw.styles';

export const RendererSpecies = ({
  urlList,
  loadedData,
}) => {
  if (!urlList.length || !loadedData.length) return null;
  return urlList.map(url => {
    const detail = loadedData.find(details => details.url === url);
    if (!detail) return null;
    const { name, classification, language } = detail;
    const link = swapiService.generateLink(url, name, 'species');

    return (
      <ListItem key={url} to={link}>
        {name} (classification: {classification})<br />
        language: <strong>{language}</strong>
      </ListItem>
    );
  });
};

export default RendererSpecies;
