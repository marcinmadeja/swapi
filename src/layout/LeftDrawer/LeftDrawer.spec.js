import React from 'react';
import SidebarNav from 'components/SidebarNav/SidebarNav';
import { LeftDrawer } from './LeftDrawer';

describe('LeftDrawer', () => {
  const wrapper = shallow(<LeftDrawer />).dive();

  it('should render without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render SidebarNav', () => {
    expect(wrapper.find(SidebarNav).exists()).toEqual(true);
  });
});
