/*
 *
 * DiscoverPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_DISCOVER_DATA,
  GET_DISCOVER_DATA_SUCCESS,
  GET_DISCOVER_DATA_ERROR,
} from './constants';

export const initialState = fromJS({
  data: false,
  error: false,
});

function discoverPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DISCOVER_DATA: {
      return state.set('loading', true).set('error', false);
    }
    case GET_DISCOVER_DATA_SUCCESS: {
      const data = action.payload;
      return state
        .set('data', data)
        .set('loading', false)
        .set('error', false);
    }
    case GET_DISCOVER_DATA_ERROR: {
      const error = action.payload;
      return state.set('loading', false).set('error', error);
    }
    default:
      return state;
  }
}

export default discoverPageReducer;
