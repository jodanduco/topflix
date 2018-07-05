import { fromJS } from 'immutable';
import discoverPageReducer from '../reducer';

describe('discoverPageReducer', () => {
  it('returns the initial state', () => {
    expect(discoverPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
