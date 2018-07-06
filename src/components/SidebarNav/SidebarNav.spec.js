import React from 'react';
import SidebarNav from './SidebarNav';

const setup = () => {
  const actions = {
    toggleExtend: jest.fn(),
  };

  const component = <SidebarNav {...actions} />;
  const shallowComponent = shallow(component);
  const shallowComponentDive = shallowComponent.dive();

  return {
    actions,
    shallowComponent,
    toggleButton: shallowComponentDive.find('[data-test="toggleButton"]'),
  };
};

describe('SidebarNav', () => {
  const {
    shallowComponent,
    toggleButton,
    actions,
  } = setup();

  it('should render without crashing', () => {
    expect(shallowComponent.exists()).toEqual(true);
  });

  it('should render toggle button', () => {
    expect(toggleButton.exists()).toEqual(true);
  });

  it('should call toggle', () => {
    expect(actions.toggleExtend.mock.calls.length).toEqual(0);
    toggleButton.simulate('click');
    expect(actions.toggleExtend.mock.calls.length).toEqual(1);
  });
});
