import React from 'react';
import Loading from 'components/Loading/Loading';
import SignIn from 'scenes/SignIn/SignIn';
import { Root } from './Root';
import App from './App';

const defaultProps = {
  user: null,
  pending: false,
  errors: false,
};

const setup = props => {
  props = { ...defaultProps, ...props };
  const component = <Root {...props} />;
  const shallowComponent = shallow(component);

  return {
    component,
    shallowComponent,
  };
};

describe('Root', () => {
  it('should render Loading when progress', () => {
    const { shallowComponent } = setup({ pending: true });
    expect(shallowComponent.find(Loading)).toHaveLength(1);
    expect(shallowComponent.find(SignIn)).toHaveLength(0);
    expect(shallowComponent.find(App)).toHaveLength(0);
  });

  it('should render form when user is not sign up', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.find(Loading)).toHaveLength(0);
    expect(shallowComponent.find(SignIn)).toHaveLength(1);
    expect(shallowComponent.find(App)).toHaveLength(0);
  });

  it('should render App when user is sign in', () => {
    const { shallowComponent } = setup({ user: {} });

    expect(shallowComponent.find(Loading)).toHaveLength(0);
    expect(shallowComponent.find(SignIn)).toHaveLength(0);
    expect(shallowComponent.find(App)).toHaveLength(1);
  });
});
