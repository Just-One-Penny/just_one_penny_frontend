/**
 *
 * Asynchronously loads the component for CheckoutError
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CheckoutError = lazyLoad(
  () => import('./index'),
  module => module.CheckoutError,
);
