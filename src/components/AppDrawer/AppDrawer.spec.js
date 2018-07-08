import React from 'react';
import AppDrawer from './AppDrawer';

const defaultProps = {
  classes: {},
  extend: true,
};

const setup = (props = {}, children = null) => {
  props = { ...defaultProps, ...props };
  const component = <AppDrawer {...props}>{children}</AppDrawer>;
  const shallowComponent = shallow(component);

  return {
    component,
    shallowComponent,
  };
};


describe('AppDrawer', () => {
  it('should render correctly', () => {
    const { shallowComponent } = setup({}, <div />);
    expect(shallowComponent.exists()).toBe(true);
  });

  it('should render children', () => {
    const { shallowComponent } = setup({}, <div data-test="children" />);
    expect(shallowComponent.find('[data-test="children"]').length).toEqual(1);
  });
});
