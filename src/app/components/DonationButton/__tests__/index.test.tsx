import React from 'react';
import { render } from '@testing-library/react';

import { DonationButton } from '..';

describe('<DonationButton  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <DonationButton charityId="" charityName="" buttonStyle="donation" />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
