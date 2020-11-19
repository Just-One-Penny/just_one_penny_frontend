/**
 *
 * Asynchronously loads the component for OneSvg
 *
 */

import { lazyLoad } from 'utils/loadable';

export const OneSvg = lazyLoad(
  () => import('./index'),
  module => module.OneSvg,
);
