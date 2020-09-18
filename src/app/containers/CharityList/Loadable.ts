/**
 *
 * Asynchronously loads the component for CharityList
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CharityList = lazyLoad(
  () => import('./index'),
  module => module.CharityList,
);
