import React from 'react';
import { users } from 'constants/testConstants';
import BarUser from './BarUser';

const defaultProps = {
  classes: {},
  user: {},
};

const setup = (props = {}, children = null) => {
  props = { ...defaultProps, ...props };
  const component = <BarUser {...props}>{children}</BarUser>;
  const shallowComponent = shallow(component);

  return {
    component,
    shallowComponent,
  };
};

describe('BarUsers', () => {
  it('should matchSnapshot', () => {
    const { component } = setup({ user: users[0] });
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot(tree);
  });
});
