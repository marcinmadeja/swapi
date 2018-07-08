import React from 'react';
import { swapiPeople } from 'constants/testConstants';
import TabListItem from './TabListItem';
import { ListItem } from './styles';

const defaultProps = {
  url: '',
  loadedData: [],
  titleKey: 'name',
};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {
    updateSwFilms: jest.fn(),
    updateSwVehicles: jest.fn(),
    updateSwStarships: jest.fn(),
  };

  const component = <TabListItem {...actions} {...props} />;
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('TabListItem', () => {
  it('should render TabListItem', () => {
    const { shallowComponent } = setup({ loadedData: swapiPeople });
    expect(shallowComponent.exists()).toBe(true);
  });

  it('should render ListItem', () => {
    const { shallowComponent } = setup({
      loadedData: swapiPeople,
      url: swapiPeople[0].url,
    });
    expect(shallowComponent.find(ListItem).exists()).toBe(true);
  });

  it('should render empty component, when no data', () => {
    const { component } = setup();
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot(tree);
  });
});
