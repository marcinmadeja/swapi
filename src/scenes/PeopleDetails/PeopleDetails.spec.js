import React from 'react';
import { PeopleDetails } from './PeopleDetails';

describe('PeopleDetails', () => {
  it('should render', () => {
    const component = shallow(<PeopleDetails
      list={[]}
      match={{}}
      getItemById={() => {}}
    />);

    expect(component.exists()).toBe(true);
  });
});
