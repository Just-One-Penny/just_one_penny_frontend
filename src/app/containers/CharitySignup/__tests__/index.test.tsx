import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

import { CharitySignup } from '..';

const renderComponent = () =>
  render(
    <HelmetProvider>
      <CharitySignup />
    </HelmetProvider>,
  );

describe('<CharitySignup />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
