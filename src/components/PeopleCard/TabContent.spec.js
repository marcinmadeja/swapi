import React from 'react';
import { swapiPeople } from 'constants/testConstants';
import { AlertStandard } from 'components/alerts';
import TabContent from './TabContent';

const defaultProps = {};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {
    render: jest.fn(),
    updateData: jest.fn(),
  };

  const component = <TabContent {...actions} {...props} />;
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

const formatUrlList = list => list.map(item => item.url);

describe('TabContent', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });

  it('should call render function after rendering', () => {
    const { actions } = setup();
    expect(actions.render.mock.calls.length).toEqual(1);
  });

  it('should not call not call update when empty arrays', () => {
    const { actions } = setup();
    expect(actions.updateData.mock.calls.length).toEqual(0);
  });

  it('should call update function when there is not loaded elements', () => {
    const { actions } = setup({
      urlList: formatUrlList(swapiPeople),
      isActive: true,
    });
    expect(actions.updateData.mock.calls.length).toEqual(1);
  });

  it('should not call render function when there is not loaded elements', () => {
    const { actions } = setup({
      urlList: formatUrlList(swapiPeople),
      isActive: true,
    });
    expect(actions.render.mock.calls.length).toEqual(0);
  });

  it('should render alert when data need to update', () => {
    const { shallowComponent } = setup({
      urlList: formatUrlList(swapiPeople),
      isActive: true,
    });

    expect(shallowComponent.find(AlertStandard).length).toEqual(1);
  });
});

