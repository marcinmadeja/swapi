import React from 'react';
import BarUser from 'components/BarUser/BarUser';
import { TopBar } from './TopBar';

describe('TopBar', () => {
  const wrapper = shallow(<TopBar classes={{}} user={{}} />).dive();

  it('should render without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render BarUser', () => {
    expect(wrapper.find(BarUser).exists()).toEqual(true);
  });
});
