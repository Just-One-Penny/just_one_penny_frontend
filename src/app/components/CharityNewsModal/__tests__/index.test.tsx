import React from 'react';
import { render } from '@testing-library/react';

import { CharityNewsModal } from '..';
import { Button } from '../../Button';

describe('<CharityNewsModal  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CharityNewsModal button={Button} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
