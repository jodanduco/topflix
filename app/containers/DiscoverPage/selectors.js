import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the discoverPage state domain
 */

const selectDiscoverPageDomain = state =>
  state.get('discoverPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DiscoverPage
 */

const makeSelectDiscoverPage = () =>
  createSelector(selectDiscoverPageDomain, substate => substate.toJS());

export default makeSelectDiscoverPage;
export { selectDiscoverPageDomain };
