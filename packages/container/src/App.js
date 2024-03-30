import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import AuthApp from './components/AuthApp';
//import CardsGame from './components/CardsGame';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path='/auth' component={AuthApp} />
            {/* <Route path='/cardgame' component={CardsGame} /> */}

            <Route path='/' component={MarketingApp} />
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
