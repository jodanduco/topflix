import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the cardItem state domain
 */

const selectCardItemDomain = state => state.get('cardItem', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CardItem
 */

const makeSelectCardItem = () =>
  createSelector(selectCardItemDomain, substate => substate.toJS());

export default makeSelectCardItem;
export { selectCardItemDomain };
