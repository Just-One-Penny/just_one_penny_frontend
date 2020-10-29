/**
 *
 * Asynchronously loads the component for StripeSuccess
 *
 */

import { lazyLoad } from 'utils/loadable';

export const StripeSuccess = lazyLoad(
  () => import('./index'),
  module => module.StripeSuccess,
);
