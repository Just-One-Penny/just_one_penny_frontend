import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactQueryConfigProvider } from 'react-query';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';

import { ThemeProvider } from 'styles/theme/ThemeProvider';

import { AuthProvider } from './auth-context';

const queryConfig = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry(failureCount, error) {
      if (error.status === 404) return false;
      else if (failureCount < 2) return true;
      else return false;
    },
  },
};

const store = configureAppStore();

function AppProviders({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <HelmetProvider>
          <React.StrictMode>
            <ReactQueryConfigProvider config={queryConfig}>
              <Router>
                <AuthProvider>{children}</AuthProvider>
              </Router>
            </ReactQueryConfigProvider>
          </React.StrictMode>
        </HelmetProvider>
      </ThemeProvider>
    </Provider>
  );
}

export { AppProviders };
