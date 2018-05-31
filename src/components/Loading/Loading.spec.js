import React from 'react';
import Loading from './Loading';

describe('Loading', () => {
  const wrapper = shallow(<Loading full loadingLabel="Login in progress" />);

  it('should render', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
