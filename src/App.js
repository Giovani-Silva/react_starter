import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Main from './pages/main';

import GlobalStyle from './styles/global';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <Main />
    </Provider>
  </Fragment>
);

export default App;
