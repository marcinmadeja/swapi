import React from 'react';
import { Content } from './TabContent.styles';

const TabContent = ({ render }) => {
  return (
    <Content>
      {render()}
    </Content>
  );
};

export default TabContent;
