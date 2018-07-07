import React from 'react';
import 'jest-styled-components';
import Home from './Home';

describe('Home', () => {
  it('should render', () => {
    const component = shallow(<Home />);
    expect(component.exists()).toBe(true);
  });
});
