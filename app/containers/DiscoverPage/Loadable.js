/**
 *
 * Asynchronously loads the component for DiscoverPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
