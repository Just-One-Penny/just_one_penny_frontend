import React from 'react';
import { render } from '@testing-library/react';

import { CharityNewsModal } from '..';

describe('<CharityNewsModal  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CharityNewsModal />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
