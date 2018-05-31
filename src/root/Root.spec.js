import React from 'react';
import Loading from 'components/Loading/Loading';
import SignIn from 'scenes/SignIn/SignIn';
import { Root } from './Root';
import App from './App';

describe('Root', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      user: null,
      pending: false,
      errors: false,
    };
  });

  it('should render Loading when progress', () => {
    props = {
      user: null,
      pending: true,
      errors: false,
    };

    wrapper = shallow(<Root {...props} />);
    expect(wrapper.find(Loading)).toHaveLength(1);
    expect(wrapper.find(SignIn)).toHaveLength(0);
    expect(wrapper.find(App)).toHaveLength(0);
  });

  it('should render form when user is not sign up', () => {
    props = {
      user: null,
      pending: false,
      errors: false,
    };

    wrapper = shallow(<Root {...props} />);
    expect(wrapper.find(Loading)).toHaveLength(0);
    expect(wrapper.find(SignIn)).toHaveLength(1);
    expect(wrapper.find(App)).toHaveLength(0);
  });

  it('should render App when user is sign in', () => {
    props = {
      user: {},
      pending: false,
      errors: false,
    };

    wrapper = shallow(<Root {...props} />);
    expect(wrapper.find(Loading)).toHaveLength(0);
    expect(wrapper.find(SignIn)).toHaveLength(0);
    expect(wrapper.find(App)).toHaveLength(1);
  });
});
