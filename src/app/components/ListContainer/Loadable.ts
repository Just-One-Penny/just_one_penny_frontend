/**
 *
 * Asynchronously loads the component for ListContainer
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ListContainer = lazyLoad(
  () => import('./index'),
  module => module.ListContainer,
);
