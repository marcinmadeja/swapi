import React from 'react';
import PropTypes from 'prop-types';
import { swapiService } from 'services';
import { AlertStandard } from 'components/alerts';

export const getNotLoadedData = (urlList, loadedData) => {
  if (areNotArrays(urlList, loadedData)) return [];
  return swapiService.getNotLoadedUrl(urlList, loadedData);
};

export const areNotArrays = (urlList, loadedData) => {
  return !Array.isArray(urlList) || !Array.isArray(loadedData);
};

export const isUpdatingInProgress = (notLoaded, isActive) => {
  return !!(notLoaded.length && isActive);
};

export const isNoData = (urlList) => {
  return Array.isArray(urlList) && !urlList.length;
};

const TabContent = ({
  isActive = false,
  urlList,
  loadedData = [],
  content,
  updateData,
  Render,
}) => {
  const notLoaded = getNotLoadedData(urlList, loadedData);

  if (isUpdatingInProgress(notLoaded, isActive)) {
    updateData(notLoaded);
    return <AlertStandard msg="Loading data" progressBar data-test="loading-data" />;
  }

  if (isNoData(urlList)) return <AlertStandard msg="No data" data-test="no-data" />;

  if (!urlList) return <Render content={content} />;
  return <Render urlList={urlList} loadedData={loadedData} />;
};

TabContent.propTypes = {
  isActive: PropTypes.bool.isRequired,
  urlList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  loadedData: PropTypes.array,
  content: PropTypes.node,
  updateData: PropTypes.func.isRequired,
  Render: PropTypes.func.isRequired,
};

TabContent.defaultProps = {
  urlList: false,
  loadedData: [],
  content: null,
};

export default TabContent;
