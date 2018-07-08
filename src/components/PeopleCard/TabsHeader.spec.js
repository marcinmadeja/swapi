import React from 'react';
import TabsHeader from './TabsHeader';

const defaultProps = {
  currentTab: 0,
  classes: {},
};

const setup = props => {
  props = { ...defaultProps, ...props };
  const actions = {
    onTabChange: jest.fn(),
  };

  const component = <TabsHeader {...actions} {...props} />;
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('TabsHeader', () => {
  it('should render TabsHeader', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
