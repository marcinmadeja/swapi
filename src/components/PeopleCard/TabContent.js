import React from 'react';
import PropTypes from 'prop-types';
import { swapiService } from 'services';
import { AlertStandard } from 'components/alerts';
import { Content } from './TabContent.styles';

const TabContent = ({
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
      {render(urlList, loadedData)}
    </Content>
  );
};

TabContent.propTypes = {
  render: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  urlList: PropTypes.array,
  loadedData: PropTypes.array,
  updateData: PropTypes.func,
};

TabContent.defaultProps = {
  isActive: false,
  urlList: [],
  loadedData: [],
  updateData: () => {},
};

export default TabContent;
