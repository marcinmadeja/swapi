import React from 'react';
import { DrawerUsers } from './DrawerUsers';
import UsersList from './UsersList/UsersList';

const defaultProps = {
  usersList: [],
  usersListLast: [],
  usersListFriends: [],
};

const setup = props => {
  const actions = {
    toggleExtend: jest.fn(),
  };

  props = { ...defaultProps, ...props };

  const component = <DrawerUsers {...actions} {...props} />;
  const shallowComponent = shallow(component);

  return {
    actions,
    shallowComponent,
    usersList: shallowComponent.find(UsersList),
    toggleButton: shallowComponent.find('[data-test="toggleButton"]'),
  };
};

describe('DrawerUsers', () => {
  const mockToggle = jest.fn();
  const {
    shallowComponent,
    usersList,
    toggleButton,
    actions,
  } = setup();

  it('should render without crashing', () => {
    expect(shallowComponent.exists()).toEqual(true);
  });

  it('should render three UsersList', () => {
    expect(usersList.length).toEqual(3);
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
