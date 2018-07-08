import React from 'react';
import 'jest-styled-components';
import Alert from './Alert';

const defaultProps = {
  msg: '',
};

const setup = props => {
  props = { ...defaultProps, ...props };
  const component = <Alert {...props} />;
  const shallowComponent = shallow(component);

  return {
    component,
    shallowComponent,
  };
};

describe('Alert', () => {
  it('should render alert with message and progress bar', () => {
    const { component } = setup({ msg: 'Test message', progressBar: true });

    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot(tree);
  });
});
