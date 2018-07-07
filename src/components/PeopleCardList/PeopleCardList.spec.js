import React from 'react';
import PeopleCardList from './PeopleCardList';

describe('PeopleCardList', () => {
  it('should render', () => {
    const component = shallow(<PeopleCardList><div /></PeopleCardList>);
    expect(component.exists()).toBe(true);
  });
});

