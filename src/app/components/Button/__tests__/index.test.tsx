import React from 'react';
import { render } from '@testing-library/react';

import { Button } from '..';

describe('<Button  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Button btnStyle="primary" />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
