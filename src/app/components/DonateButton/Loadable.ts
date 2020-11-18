/**
 *
 * Asynchronously loads the component for DonateButton
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DonateButton = lazyLoad(
  () => import('./index'),
  module => module.DonateButton,
);
