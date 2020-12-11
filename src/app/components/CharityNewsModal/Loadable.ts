/**
 *
 * Asynchronously loads the component for CharityNewsModal
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CharityNewsModal = lazyLoad(
  () => import('./index'),
  module => module.CharityNewsModal,
);
