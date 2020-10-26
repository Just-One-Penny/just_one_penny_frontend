/**
 *
 * Asynchronously loads the component for CharityDisplay
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CharityDisplay = lazyLoad(
  () => import('./index'),
  module => module.CharityDisplay,
);
