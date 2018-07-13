import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { api } from 'services';

export const mockStore = configureMockStore([thunk.withExtraArgument(api)]);
