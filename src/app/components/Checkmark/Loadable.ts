/**
 *
 * Asynchronously loads the component for Checkmark
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Checkmark = lazyLoad(
  () => import('./index'),
  module => module.Checkmark,
);
