import React from 'react';
import { swapiPeople } from 'constants/testConstants';
import PeopleCard from './PeopleCard';
import TabsHeader from './TabsHeader';
import CardTitle from './CardTitle';
import TabsContent from './TabsContent';


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

  it('should render TabsHeader', () => {
    const shallowComponent = setup({ user: swapiPeople[0] }).shallowComponent.dive();
    expect(shallowComponent.find(TabsHeader).exists()).toBe(true);
  });

  it('should render CardTitle', () => {
    const shallowComponent = setup({ user: swapiPeople[0] }).shallowComponent.dive();
    expect(shallowComponent.find(CardTitle).exists()).toBe(true);
  });

  it('should render TabsContent', () => {
    const shallowComponent = setup({ user: swapiPeople[0] }).shallowComponent.dive();
    expect(shallowComponent.find(TabsContent).exists()).toBe(true);
  });
});
