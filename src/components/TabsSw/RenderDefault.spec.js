import React from 'react';
import RenderDefault from './RenderDefault';

const TestComponent = () => null;

describe('RenderDefault', () => {
  it('should render TestComponent', () => {
    const shallowComponent = shallow(<RenderDefault content={<TestComponent />} />);
    expect(shallowComponent.find(TestComponent).length).toEqual(1);
  });
});
