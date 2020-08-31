import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme, themeSliceKey, reducer } from './slice';
import { useInjectReducer } from 'redux-injectors';
import { createTheme, WuiProvider } from '@welcome-ui/core';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  useInjectReducer({ key: themeSliceKey, reducer: reducer });

  const themeOptions = useSelector(selectTheme);
  const theme = createTheme(themeOptions);

  return (
    <WuiProvider
      theme={theme}
      // Will inject a CSS reset with normalizer
      hasGlobalStyle
    >
      {React.Children.only(props.children)}
    </WuiProvider>
  );
};
