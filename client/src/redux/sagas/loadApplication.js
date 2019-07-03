import { put, takeEvery } from 'redux-saga/effects'
import {SCENE, APPLICATION} from '../actionTypes'
import axios from 'axios';

export function* loadApplicationAsync() {
    try {
        yield put({type:APPLICATION.INIT, payload: null})
        const {data} = yield axios.get('/api/scene');
        yield* data.map( scene => put({ type: SCENE.CREATE, payload:scene }))

        yield put({type:APPLICATION.LOAD, payload: null})
    }
    catch (err) {
        console.log("Fetch failed: ", err)
    }
}
export function* appSaga() {
    yield takeEvery(APPLICATION.START, loadApplicationAsync)
  }