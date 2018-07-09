import React from 'react';
import DetailsPage,
{
  shouldSendRequest,
  getId,
} from './DetailsPage';
import Details from './Details';

const defaultProps = {
  pendingDetails: false,
  errorsDetails: false,
  list: [],
  tabsList: [],
  match: {
    params: { id: 1 },
  },
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

  it('shouldSendRequest returns true when needed', () => {
    const { actions } = setup();
    const props = {
      ...defaultProps,
      ...actions,
      pendingDetails: false,
      errorsDetails: false,
      list: [],
    };

    expect(shouldSendRequest(props)).toBe(true);
  });

  it('shouldSendRequest returns false when needed', () => {
    const { actions } = setup();
    const props1 = {
      ...defaultProps,
      ...actions,
      pendingDetails: true,
      errorsDetails: false,
      list: [],
    };

    const props2 = {
      ...defaultProps,
      ...actions,
      pendingDetails: false,
      errorsDetails: true,
      list: [],
    };

    expect(shouldSendRequest(props1)).toBe(false);
    expect(shouldSendRequest(props2)).toBe(false);
  });

  it('should get id from routers', () => {
    const id = getId(defaultProps);
    expect(id).toEqual(1);
  });
});
