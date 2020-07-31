import './App.css';
import Home from './Home';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import * as Sentry from '@sentry/react';
import { SENTRY_AUTH_URL } from '../configs/sentry';

//setry for error dashboard
Sentry.init({ dsn: SENTRY_AUTH_URL });
const App = () => (
  <Provider store={configureStore()}>
    <Switch>
      <Route exact={true} path="/" component={Home} />
    </Switch>
  </Provider>
);

export default App;
