import React from 'react';
import { DrawerUsers } from './DrawerUsers';
import UsersList from './UsersList/UsersList';

describe('DrawerUsers', () => {
  const mockToggle = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DrawerUsers toggleExtend={mockToggle} />);
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render three UsersList', () => {
    expect(wrapper.find(UsersList).length).toEqual(3);
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
