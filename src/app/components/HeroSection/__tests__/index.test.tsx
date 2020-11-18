import React from 'react';
import { render } from '@testing-library/react';

import { HeroSection } from '..';

describe('<HeroSection  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<HeroSection />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
