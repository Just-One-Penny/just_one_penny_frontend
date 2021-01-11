/**
 *
 * Asynchronously loads the component for Faq
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Faq = lazyLoad(
  () => import('./index'),
  module => module.Faq,
);
