/*
 *
 * DiscoverPage actions
 *
 */

import {
  GET_DISCOVER_DATA,
  GET_DISCOVER_DATA_SUCCESS,
  GET_DISCOVER_DATA_ERROR,
} from './constants';

export function getDiscoverData() {
  return {
    type: GET_DISCOVER_DATA,
  };
}

export function getDiscoverDataSuccess(data) {
  return {
    type: GET_DISCOVER_DATA_SUCCESS,
    payload: data,
  };
}

export function getDiscoverDataError(error) {
  return {
    type: GET_DISCOVER_DATA_ERROR,
    payload: error,
  };
}
