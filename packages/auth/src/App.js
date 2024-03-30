import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path='/auth/signin' component={SignIn} />
            <Route path='/auth/signup' component={SignUp} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
