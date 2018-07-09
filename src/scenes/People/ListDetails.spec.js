import React from 'react';
import 'jest-styled-components';
import ListDetails from './ListDetails';

const details = {
  name: 'Name',
  birth_year: '2001',
  gender: 'male',
};

const defaultProps = {
  details,
};

const setup = (props = {}, children = null) => {
  props = { ...defaultProps, ...props };
  const component = <ListDetails {...props}>{children}</ListDetails>;
  const shallowComponent = shallow(component);

  return {
    component,
    shallowComponent,
  };
};

describe('ListDetails', () => {
  it('should render correctly', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });

  it('should match snapshot with passed details', () => {
    const { component } = setup();
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot(tree);
  });
});
