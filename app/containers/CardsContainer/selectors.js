import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the cardsContainer state domain
 */

const selectCardsContainerDomain = state =>
  state.get('cardsContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CardsContainer
 */

const makeSelectCardsContainer = () =>
  createSelector(selectCardsContainerDomain, substate => substate.toJS());

export default makeSelectCardsContainer;
export { selectCardsContainerDomain };
