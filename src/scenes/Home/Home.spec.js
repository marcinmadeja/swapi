import React from 'react';
import 'jest-styled-components';
import { swapiPeople } from 'constants/testConstants';
import PeopleCardsList from 'components/PeopleCardsList/PeopleCardsList';
import { Home } from './Home';

describe('Home', () => {
  let wrapper;
  let tree;

  it('show Loading data alert', () => {
    tree = renderer
      .create(<Home requestSwPeople={() => {}} pending />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('show errors alert', () => {
    tree = renderer
      .create(<Home requestSwPeople={() => {}} errors />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render users list', () => {
    wrapper = shallow(<Home requestSwPeople={() => {}} list={swapiPeople} />);
    expect(wrapper.find(PeopleCardsList).length).toEqual(1);
  });
});
