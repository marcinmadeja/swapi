import React from 'react';
import { swapiPeople } from 'constants/testConstants';
import TabList from './TabList';
import TabListItem from './TabListItem';

const defaultProps = {
  urlList: [],
  emptyListMsg: '',
  loadedData: [],
  titleKey: '',
};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {};

  const component = <TabList {...actions} {...props} />;
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

const formatUrlList = list => list.map(item => item.url);

describe('TabList', () => {
  it('should render TabList', () => {
    const { shallowComponent } = setup({ urlList: formatUrlList(swapiPeople) });
    expect(shallowComponent.exists()).toBe(true);
  });

  it('should render empty msg, when urlList empty', () => {
    const { component } = setup({ emptyListMsg: 'empty msg', urlList: [] });
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component when urlList is not empty', () => {
    const { shallowComponent } = setup({
      urlList: formatUrlList(swapiPeople),
      loadedData: swapiPeople,
    });

    expect(shallowComponent.find(TabListItem).length).toEqual(swapiPeople.length);
  });
});
