import React from 'react';
import { swapiService } from 'services';
import { AlertStandard } from 'components/alerts';

const TabContent = ({
  name,
  isActive = false,
  urlList = [],
  loadedData = [],
  updateData,
  render,
}) => {
  function getNotLoadedData() {
    if (!Array.isArray(urlList) || !Array.isArray(loadedData)) return [];
    return swapiService.getNotLoadedUrl(urlList, loadedData);
  }

  const notLoaded = getNotLoadedData();

  if (notLoaded.length && isActive) {
    updateData(notLoaded);
    return <AlertStandard msg="Loading data" progressBar />;
  }

  return render(urlList, loadedData);
};

export default TabContent;
