/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import 'styles/styles.css';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { CharityList } from './containers/CharityList/Loadable';
import { About } from './containers/About/Loadable';
import { CharitySignup } from './containers/CharitySignup';
import { NavBar } from './containers/NavBar';
import { Footer } from './components/Footer';

export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route exact path="/about" component={About} />
        <Route exact path="/charities" component={CharityList} />
        <Route exact path="/charities/new" component={CharitySignup} />

        {/* Make sure you add new routes above the not found page */}
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}
