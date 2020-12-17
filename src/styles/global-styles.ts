import { createGlobalStyle } from 'styled-components';
// import { StyleConstants } from './StyleConstants';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-size: 100%;
  }

  body {
    font-family: Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: ${p => p.theme.colors.light[200]};
  }

  body.fontLoaded {
    font-family: Avenir, 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
