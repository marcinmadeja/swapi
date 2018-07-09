import React from 'react';
import { People } from './People';

const defaultProps = {
  list: [],
  pending: false,
  errors: false,
  requestSwPeople: jest.fn(),
};

const setup = (props = {}, children = null) => {
  props = { ...defaultProps, ...props };
  const component = <People {...props}>{children}</People>;
  const shallowComponent = shallow(component);

  return {
    component,
    shallowComponent,
  };
};

describe('People', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
