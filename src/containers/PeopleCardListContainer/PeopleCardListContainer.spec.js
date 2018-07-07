import React from 'react';
import { swapiPeople } from 'constants/testConstants';
import PeopleCard from 'components/PeopleCard/PeopleCard';
import { PeopleCardListContainer } from './PeopleCardListContainer';

const defaultProps = {
  list: [],
  pending: false,
  errors: false,

  filmsList: [],
  starshipsList: [],
  vehiclesList: [],
};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {
    requestSwPeople: jest.fn(),
    updateSwFilms: jest.fn(),
    updateSwVehicles: jest.fn(),
    updateSwStarships: jest.fn(),
  };

  const component = <PeopleCardListContainer key={1} {...actions} {...props} />;
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('PeopleCardListContainer', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });

  it('should show Loading data alert when pending', () => {
    const { component } = setup({ pending: true });

    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should show errors alert when something goes wrong', () => {
    const { component } = setup({ errors: true });

    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should return null when list array is empty', () => {
    const { shallowComponent } = setup({ list: [] });
    expect(shallowComponent.find(PeopleCard).length).toEqual(0);
  });

  it('should render PeopleCards list when non empty array was passed', () => {
    const { shallowComponent } = setup({ list: swapiPeople });
    expect(shallowComponent.find(PeopleCard).length).toEqual(swapiPeople.length);
  });
});

