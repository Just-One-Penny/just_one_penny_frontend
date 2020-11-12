/**
 *
 * Asynchronously loads the component for ContactUs
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ContactUs = lazyLoad(
  () => import('./index'),
  module => module.ContactUs,
);
