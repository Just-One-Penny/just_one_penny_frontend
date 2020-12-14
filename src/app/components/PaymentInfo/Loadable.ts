/**
 *
 * Asynchronously loads the component for PaymentInfo
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PaymentInfo = lazyLoad(
  () => import('./index'),
  module => module.PaymentInfo,
);
