import React from 'react';
import 'jest-styled-components';
import CardTitle from './CardTitle';

describe('CardTitle', () => {
  it('should render element', () => {
    const component = shallow(<CardTitle name="" />);
    expect(component.exists()).toBe(true);
  });

  it('should match snapshot', () => {
    const tree = renderer
      .create(<CardTitle name="user name" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
