import request from 'utils/request';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import {
  GET_DISCOVER_DATA,
  GET_DISCOVER_DATA_SUCCESS,
  GET_DISCOVER_DATA_ERROR,
} from './constants';

import { getDiscoverDataSuccess, getDiscoverDataError} from './actions';

const ROOT_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=e96b1f788308a173862bdf649f1cf7f7';
const OPTIONS = '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

export function* getDiscoverDataSaga() {
  const requestURL = `${ROOT_URL}/discover/movie${API_KEY}${OPTIONS}`;
  try {
    const response = yield call(request, requestURL);
    const data = response.results;
    yield put(getDiscoverDataSuccess(data));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}

// Individual exports for testing
export default function* discoverPage() {
  yield takeLatest(GET_DISCOVER_DATA, getDiscoverDataSaga);
}
