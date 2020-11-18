import React from 'react';
import { render } from '@testing-library/react';

import { DonateButton } from '..';

describe('<DonateButton  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<DonateButton />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
