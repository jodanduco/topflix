/**
 *
 * Asynchronously loads the component for ResponsiveDrawer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
