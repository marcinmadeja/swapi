import React from 'react';
import { swapiPeople } from 'constants/testConstants';
import SwapiList from './SwapiList';
import ListItem from './ListItem';

const defaultProps = {
  list: [],
  pending: false,
  errors: false,
  listName: '',
  ListDetails: jest.fn(),
  requestList: jest.fn(),
};

const setup = (props = {}, children = null) => {
  props = { ...defaultProps, ...props };
  const component = <SwapiList {...props}>{children}</SwapiList>;
  const shallowComponent = shallow(component);

  return {
    component,
    shallowComponent,
  };
};

describe('SwapiList', () => {
  it('should render pending alert when pending', () => {
    const { shallowComponent } = setup({ pending: true });
    expect(shallowComponent.find('[data-test="pending"]').length).toEqual(1);
  });

  it('should render errors alert when needed', () => {
    const { shallowComponent } = setup({ errors: true });
    expect(shallowComponent.find('[data-test="errors"]').length).toEqual(1);
  });

  it('should render null when empty list', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.html()).toEqual(null);
  });
});
