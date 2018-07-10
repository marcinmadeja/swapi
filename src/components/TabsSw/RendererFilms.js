import React from 'react';
import PropTypes from 'prop-types';
import { swapiService } from 'services';
import { ListItem } from './TabsSw.styles';

export const RendererFilms = ({
  urlList,
  loadedData,
}) => {
  if (!urlList.length || !loadedData.length) return null;
  return urlList.map(url => {
    const detail = loadedData.find(details => details.url === url);
    if (!detail) return null;
    const { title, release_date } = detail;
    const link = swapiService.generateLink(url, title, 'films');

    return (
      <ListItem key={url} to={link}>
        {title}<br />
        release date <strong>{release_date}</strong>
      </ListItem>
    );
  });
};

RendererFilms.propTypes = {
  urlList: PropTypes.array.isRequired,
  loadedData: PropTypes.array.isRequired,
};

export default RendererFilms;
