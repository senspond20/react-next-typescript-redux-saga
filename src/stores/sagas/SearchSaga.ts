import { call, put, takeEvery } from "redux-saga/effects";
import {SEARCH} from '@stores/actions/actionTypes'
import * as actions from "@stores/actions/search";
import axios from "axios";

function searchAPI(name) {
    return axios.get(`https://api.tvmaze.com/search/shows?q=${name}`)
}

function* fetchSearchSaga(action) {
    try {
        const name = action.payload.name
        const { data } = yield call(searchAPI, name)
        yield put(actions.searchSuccess(data));
    } catch (error) {
        yield put(actions.searchFail('error'));
    }
}

/**
 * SEARCH DISPATH EVENT WATCH
 * 이벤트기 감지되었을때 동작한다.
 */
export default function* watchSearch() {
    yield takeEvery(SEARCH, fetchSearchSaga);
}
