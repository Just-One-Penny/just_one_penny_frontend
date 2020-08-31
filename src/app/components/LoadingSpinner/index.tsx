/**
 *
 * LoadingSpinner
 *
 */
import React from 'react';
import styled, { keyframes } from 'styled-components/macro';

import { FaSpinner } from 'react-icons/fa';

interface Props {}

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
});
Spinner.defaultProps = {
  'aria-label': 'loading',
};

export const LoadingSpinner = () => {
  return (
    <div>
      <Spinner />
    </div>
  );
};
