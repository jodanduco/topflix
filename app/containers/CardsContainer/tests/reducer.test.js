import { fromJS } from 'immutable';
import cardsContainerReducer from '../reducer';

describe('cardsContainerReducer', () => {
  it('returns the initial state', () => {
    expect(cardsContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
