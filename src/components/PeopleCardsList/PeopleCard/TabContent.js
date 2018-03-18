import React from 'react';
import { swapiService, api } from 'services';
import { AlertStandard } from 'components/alerts';
import { Content } from './TabContent.styles';

const TabContent = ({
  name,
  render,
  isActive = false,
  urlList = [],
  loadedData = [],
  updateData,
}) => {
  const notLoaded = swapiService.getNotLoadedUrl(urlList, loadedData);
  if (notLoaded.length && isActive) {
    updateData(notLoaded);
    return <AlertStandard msg="Loading data" progressBar />;
  }

  return (
    <Content>
      {render()}
    </Content>
  );
};

export default TabContent;
