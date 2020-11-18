/**
 *
 * Asynchronously loads the component for DonationButton
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DonationButton = lazyLoad(
  () => import('./index'),
  module => module.DonationButton,
);
