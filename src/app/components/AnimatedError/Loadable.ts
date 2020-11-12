/**
 *
 * Asynchronously loads the component for AnimatedError
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AnimatedError = lazyLoad(
  () => import('./index'),
  module => module.AnimatedError,
);
