import { fromJS } from 'immutable';
import cardItemReducer from '../reducer';

describe('cardItemReducer', () => {
  it('returns the initial state', () => {
    expect(cardItemReducer(undefined, {})).toEqual(fromJS({}));
  });
});
