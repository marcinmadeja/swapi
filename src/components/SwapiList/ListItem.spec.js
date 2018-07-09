import React from 'react';
import 'jest-styled-components';
import { MemoryRouter } from 'react-router-dom';
import { swapiPeople } from 'constants/testConstants';
import ListItem, { createSeName } from './ListItem';

const selectedPerson = swapiPeople[0];

const defaultProps = {
  classes: {},
  item: {},
  ListDetails: () => { return null; },
  errors: false,
  listName: '',
};

const setup = (props = {}, children = null) => {
  props = { ...defaultProps, ...props };
  const component = <ListItem {...props}>{children}</ListItem>;
  const shallowComponent = shallow(component);
  const componentWithRouter = <MemoryRouter><ListItem {...props}>{children}</ListItem></MemoryRouter>;

  return {
    component,
    shallowComponent,
    componentWithRouter,
  };
};

describe('ListItem', () => {
  it('should render', () => {
    const { shallowComponent } = setup({ item: selectedPerson, listName: 'people' });
    expect(shallowComponent.exists()).toBe(true);
  });

  it('should match snapshot', () => {
    const { componentWithRouter } = setup({ item: selectedPerson, listName: 'people' });
    const tree = renderer
      .create(componentWithRouter)
      .toJSON();

    expect(tree).toMatchSnapshot(tree);
  });

  it('should create good ', () => {
    const seoName = createSeName(
      'Leia Organa',
      'https://swapi.co/api/people/5/',
      'people',
    );

    expect(seoName).toEqual('/people/leia-organa/5');
  });

  it('should create wrong link', () => {
    expect(createSeName(
      'Leia Organa',
      'https://swapi.co/api/people/7/',
      'people',
    )).not.toBe('/people/leia-organa/5');

    expect(createSeName(
      'Leia Organa',
      'https://swapi.co/api/people/5/',
      'peoplee',
    )).not.toBe('/people/leia-organa/5');
  });
});
