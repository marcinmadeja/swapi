import React from 'react';
import 'jest-styled-components';
import { swapiPeople } from 'constants/testConstants';
import PeopleCardsList from 'components/PeopleCardsList/PeopleCardsList';
import { Home } from './Home';

const setup = (props = {}) => {
  const actions = {
    requestSwPeople: jest.fn(),
  };

  const component = <Home {...actions} {...props} />;
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('Home', () => {
  it('show Loading data alert', () => {
    const { component } = setup({ pending: true });
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('show errors alert', () => {
    const { component } = setup({ errors: true });
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render users list', () => {
    const { shallowComponent } = setup({ list: swapiPeople });
    expect(shallowComponent.find(PeopleCardsList).length).toEqual(1);
  });
});
