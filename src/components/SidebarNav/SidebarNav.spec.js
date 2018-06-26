import React from 'react';
import SidebarNav from './SidebarNav';

describe('SidebarNav', () => {
  const mockToggle = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SidebarNav toggleExtend={mockToggle} />).dive();
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render toggle button', () => {
    const toggleButton = wrapper.find('[data-test="toggleButton"]');
    expect(toggleButton.exists()).toEqual(true);
  });

  it('should call toggle', () => {
    const toggleButton = wrapper.find('[data-test="toggleButton"]');
    expect(mockToggle.mock.calls.length).toEqual(0);
    toggleButton.simulate('click');
    expect(mockToggle.mock.calls.length).toEqual(1);
  });
});
