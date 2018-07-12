/**
 *
 * Asynchronously loads the component for CardItem
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
