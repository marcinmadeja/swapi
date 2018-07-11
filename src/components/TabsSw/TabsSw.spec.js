import React from 'react';
import 'jest-styled-components';
import { Tab } from 'material-ui/Tabs';
import { TabsSw } from './TabsSw';
import TabContent from './TabContent';

const EmptyComponent = () => <div data-test="content" />;

const defaultProps = {
  classes: {},
  details: {},
  filmsList: [],
  peopleList: [],
  planetsList: [],
  speciesList: [],
  starshipsList: [],
  vehiclesList: [],
  tabsList: [],
  updateSwFilms: () => null,
  updateSwPeople: () => null,
  updateSwPlanets: () => null,
  updateSwSpecies: () => null,
  updateSwStarships: () => null,
  updateSwVehicles: () => null,
};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const component = <TabsSw {...props} />;
  const shallowComponent = shallow(component);

  return {
    component,
    shallowComponent,
  };
};

const tabsList = [
  { name: 'name1', content: <EmptyComponent /> },
  { name: 'name2', content: <EmptyComponent /> },
];

describe('TabsSw', () => {
  it('should render tab for every item in tabList', () => {
    const { shallowComponent } = setup({ tabsList });
    expect(shallowComponent.find(Tab).length).toEqual(tabsList.length);
  });

  it('should render TabContent for every item in tabList', () => {
    const { shallowComponent } = setup({ tabsList });
    expect(shallowComponent.find(TabContent).length).toEqual(tabsList.length);
  });
});
