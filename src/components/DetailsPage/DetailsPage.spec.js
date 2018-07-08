import React from 'react';
import DetailsPage, { sendRequestIfNeeded, getItemByIdLocal, getId } from './DetailsPage';
import Details from './Details';

const defaultProps = {
  pendingDetails: false,
  errorsDetails: false,
  list: [],
  tabsList: [],
};

const setup = (props = {}, children = null) => {
  props = { ...defaultProps, ...props };
  const actions = {
    getItemById: jest.fn(),
    detailsHeader: jest.fn(),
  };

  const component = <DetailsPage {...actions} {...props}>{children}</DetailsPage>;
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('DetailsPage', () => {
  it('should render pending alert when waiting for data', () => {
    const { shallowComponent } = setup({ pendingDetails: true });
    expect(shallowComponent.find('[data-test="pendingAlert"]').length).toEqual(1);
  });

  it('should render pending alert when waiting for data', () => {
    const { shallowComponent } = setup({ errorsDetails: true });
    expect(shallowComponent.find('[data-test="errorAlert"]').length).toEqual(1);
  });

  it('should render Details', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.find(Details).length).toEqual(1);
  });

  it('should send request if needed', () => {
    const { actions } = setup();
    const props = {
      ...defaultProps,
      ...actions,
      pendingDetails: false,
      errorsDetails: false,
      list: [],
    };

    sendRequestIfNeeded(props);
  });
});
