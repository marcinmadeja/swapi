import React from 'react';
import { swapiPeople } from 'constants/testConstants';
import PeopleCardList from './PeopleCardsList';
import PeopleCard from './PeopleCard/PeopleCard';

const defaultProps = {
  users: [],
};

const setup = props => {
  props = { ...defaultProps, ...props };
  const component = <PeopleCardList {...props} />;
  const shallowComponent = shallow(component);

  return {
    shallowComponent,
  };
};

describe('PeopleCardList', () => {
  it('should render', () => {
    const { shallowComponent } = setup({ users: swapiPeople });
    expect(shallowComponent.exists()).toEqual(true);
  });

  it('should render no PeopleCard when empty list', () => {
    const { shallowComponent } = setup({ users: [] });
    expect(shallowComponent.find(PeopleCard).length).toEqual(0);
  });

  it('should render proper number of PeopleCard components when non empty array is passed', () => {
    const { shallowComponent } = setup({ users: swapiPeople });
    expect(shallowComponent.find(PeopleCard).length).toEqual(swapiPeople.length);
  });
});
