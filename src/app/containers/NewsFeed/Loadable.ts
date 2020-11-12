/**
 *
 * Asynchronously loads the component for NewsFeed
 *
 */

import { lazyLoad } from 'utils/loadable';

export const NewsFeed = lazyLoad(
  () => import('./index'),
  module => module.NewsFeed,
);
