import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the responsiveDrawer state domain
 */

const selectResponsiveDrawerDomain = state =>
  state.get('responsiveDrawer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ResponsiveDrawer
 */

const makeSelectResponsiveDrawer = () =>
  createSelector(selectResponsiveDrawerDomain, substate => substate.toJS());

export default makeSelectResponsiveDrawer;
export { selectResponsiveDrawerDomain };
