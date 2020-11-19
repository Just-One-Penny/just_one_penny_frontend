import React from 'react';
import { render } from '@testing-library/react';

import { PaymentInfo } from '..';

describe('<PaymentInfo  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<PaymentInfo submitForm={() => {}} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
