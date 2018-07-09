import React from 'react';
import { swapiPeople } from 'constants/testConstants';
import { tabsList } from 'scenes/PeopleDetails/PeopleDetails';
import { Main } from './Details.styles';
import Details from './Details';

const selectedPerson = swapiPeople[0];

const defaultProps = {
  tabList: false,
  details: false,
  detailsHeader: jest.fn,
};

const setup = (props = {}, children = null) => {
  props = { ...defaultProps, ...props };
  const component = <Details {...props}>{children}</Details>;
  const shallowComponent = shallow(component);

  return {
    component,
    shallowComponent,
  };
};

describe('Details', () => {
  it('should render component, and Main', () => {
    const { shallowComponent } = setup({ tabsList, details: selectedPerson });
    expect(shallowComponent.exists()).toBe(true);
    expect(shallowComponent.find(Main).length).toEqual(1);
  });

  it('should render empty', () => {
    const { shallowComponent } = setup({ tabsList });
    expect(shallowComponent.find(Main).length).toEqual(0);
  });
});
