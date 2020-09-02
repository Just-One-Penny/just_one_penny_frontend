import React from 'react';
import { render } from '@testing-library/react';

import { ListContainer } from '..';

describe('<ListContainer  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ListContainer />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
