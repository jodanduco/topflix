import { fromJS } from 'immutable';
import responsiveDrawerReducer from '../reducer';

describe('responsiveDrawerReducer', () => {
  it('returns the initial state', () => {
    expect(responsiveDrawerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
