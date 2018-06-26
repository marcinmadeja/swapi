import React from 'react';
import DrawerUsers from 'components/DrawerUsers/DrawerUsers';
import { RightDrawer } from './RightDrawer';

describe('RightDrawer', () => {
  const wrapper = shallow(<RightDrawer />).dive();

  it('should render without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render SidebarNav', () => {
    expect(wrapper.find(DrawerUsers).exists()).toEqual(true);
  });
});
