import React from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import { swapiPeople } from 'constants/testConstants';
import PeopleCard from './PeopleCard';

const defaultProps = {
  user: {},
  classes: {},

  filmsList: [],
  starshipsList: [],
  vehiclesList: [],
};


const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {
    updateSwFilms: jest.fn(),
    updateSwVehicles: jest.fn(),
    updateSwStarships: jest.fn(),
  };

  const component = <PeopleCard {...actions} {...props} />;
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('PeopleCard', () => {
  it('should render', () => {
    const { shallowComponent } = setup({ user: swapiPeople[0] });
    expect(shallowComponent.exists()).toEqual(true);
  });

  it('should call action', () => {
    const { shallowComponent } = setup({ user: swapiPeople[0] });
    const tab = shallowComponent.find(Tab);
    console.log(tab);
  });
});
