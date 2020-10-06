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
import { ContactUs } from './containers/ContactUs/Loadable';
import { Footer } from './components/Footer';
import { NavBar } from './containers/NavBar';

export function App() {
  console.log('process.env', process.env);
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
        <Route exact path="/contactUs" component={ContactUs} />
        <Route exact path="/about" component={About} />
        <Route component={NotFoundPage} />
        <Route exact path="/charities" component={CharityList} />
      </Switch>
      <GlobalStyle />
      <Footer />
    </BrowserRouter>
  );
}
