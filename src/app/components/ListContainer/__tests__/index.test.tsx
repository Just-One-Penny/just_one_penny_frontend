import React from 'react';
import { render } from '@testing-library/react';

import { ListContainer } from '../Loadable';

describe('<ListContainer  />', () => {
  it('should match snapshot', () => {
    const list = [];
    const loadingIndicator = render(<ListContainer list={list} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
