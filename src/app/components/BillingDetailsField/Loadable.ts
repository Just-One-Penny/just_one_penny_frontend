/**
 *
 * Asynchronously loads the component for BillingDetailsField
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BillingDetailsField = lazyLoad(
  () => import('./index'),
  module => module.BillingDetailsField,
);
