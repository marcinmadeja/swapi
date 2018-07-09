import React from 'react';
import { swapiPeople } from 'constants/testConstants';
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
  const component = <ListItem {...props}>{children}</ListItem>;
  const shallowComponent = shallow(component);

  return {
    component,
    shallowComponent,
  };
};

describe('ListItem', () => {

});
