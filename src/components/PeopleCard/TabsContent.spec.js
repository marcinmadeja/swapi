import React from 'react';
import TabsContent from './TabsContent';

const defaultProps = {
  currentTab: 0,
  user: {},
  filmsList: [],
  starshipsList: [],
  vehiclesList: [],
};

const setup = props => {
  props = { ...defaultProps, ...props };
  const actions = {
    updateSwFilms: jest.fn(),
    updateSwStarships: jest.fn(),
    updateSwVehicles: jest.fn(),
    onTabChange: jest.fn(),
  };

  const component = <TabsContent {...actions} {...props} />;
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('TabsContent', () => {
  it('should render TabsContent', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
