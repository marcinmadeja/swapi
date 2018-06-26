import React from 'react';
import { users } from 'constants/testConstants';
import { UsersList } from './UsersList';
import UserItem from './UserItem/UserItem';

describe('UserList', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UsersList />);
  });

  it('should render', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should not render UserItem if usersList is empty', () => {
    const tree = renderer
      .create(<UsersList usersList={[]} title="Test title!" extendDrawerUsers />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render list if usersList not empty', () => {
    const listLength = users.length;
    wrapper = shallow(<UsersList usersList={users} />);

    expect(wrapper.find(UserItem).length).toEqual(listLength);
  });
});
