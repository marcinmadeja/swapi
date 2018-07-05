import React from 'react';
import { users } from 'constants/testConstants';
import { UsersList } from './UsersList';
import UserItem from './UserItem/UserItem';

const defaultProps = {
  usersList: [],
  title: 'Test title!',
};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const component = <UsersList {...props} />;
  const shallowComponent = shallow(component);

  return {
    component,
    shallowComponent,
  };
};

describe('UserList', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toEqual(true);
  });

  it('should not render UserItem if usersList is empty', () => {
    const { component } = setup({ extendDrawerUsers: true });
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render list if usersList not empty', () => {
    const listLength = users.length;
    const { shallowComponent } = setup({ usersList: users });

    expect(shallowComponent.find(UserItem).length).toEqual(listLength);
  });
});
