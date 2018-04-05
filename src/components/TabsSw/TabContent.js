import React from 'react';
import { swapiService } from 'services';
import { AlertStandard } from 'components/alerts';

const TabContent = ({
  isActive = false,
  urlList,
  loadedData = [],
  content,
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

  if (Array.isArray(urlList) && !urlList.length) return <AlertStandard msg="No data" />;

  if (!urlList) return render(content);
  return render(urlList, loadedData);
};

export default TabContent;
