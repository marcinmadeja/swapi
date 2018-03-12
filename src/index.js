import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { MuiThemeProvider } from 'material-ui/styles';
import mainTheme from 'constants/theme';

import configureStore from 'store/configureStore';
import Root from './root/Root';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <MuiThemeProvider theme={mainTheme}>
        <Root />
      </MuiThemeProvider>
    </Provider>
  </Router>
  ,
  document.getElementById('root'),
);

registerServiceWorker();
