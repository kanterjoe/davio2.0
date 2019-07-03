import { put, takeEvery } from 'redux-saga/effects'
import {SCENE} from '../actionTypes'
import axios from 'axios';

export function* loadAsync() {
    try {
        const {data} = yield axios.get('/api/scene');
        yield* data.map( scene => put({ type: SCENE.CREATE, payload:scene }))
    }
    catch (err) {
        console.log("Fetch failed: ", err)
    }

}
export function* sceneSaga() {
    yield takeEvery(SCENE.CREATE + "_ASYNC", loadAsync)
  }