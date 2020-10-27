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
import { CharityDisplay } from './containers/CharityDisplay';
import { CharitySignup } from './containers/CharitySignup';
import { NavBar } from './containers/NavBar';
import { Footer } from './components/Footer';
import { StripeSuccess } from './containers/StripeSuccess/Loadable';
import { PageWrapper } from './components/PageWrapper';

export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - Just One Penny" defaultTitle="Just One Penny">
        <meta
          name="description"
          content="A revolutionary micro-giving platform."
        />
      </Helmet>

      <NavBar />
      <PageWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contactUs" component={ContactUs} />
          <Route exact path="/about" component={About} />
          <Route exact path="/stripe" component={StripeSuccess} />
          <Route exact path="/charities" component={CharityList} />
          <Route
            exact
            path="/charities/:charityId"
            component={CharityDisplay}
          />
          <Route exact path="/charities/new" component={CharitySignup} />

          {/* Make sure you add new routes above the not found page */}
          <Route component={NotFoundPage} />
        </Switch>
      </PageWrapper>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}
