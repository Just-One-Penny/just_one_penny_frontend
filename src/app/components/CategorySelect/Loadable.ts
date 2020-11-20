/**
 *
 * Asynchronously loads the component for CategorySelect
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CategorySelect = lazyLoad(
  () => import('./index'),
  module => module.CategorySelect,
);
