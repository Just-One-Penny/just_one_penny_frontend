/**
 *
 * Asynchronously loads the component for CharitySignup
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CharitySignup = lazyLoad(
  () => import('./index'),
  module => module.CharitySignup,
);
