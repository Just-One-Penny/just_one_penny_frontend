/**
 *
 * Asynchronously loads the component for FormField
 *
 */

import { lazyLoad } from 'utils/loadable';

export const FormField = lazyLoad(
  () => import('./index'),
  module => module.FormField,
);
