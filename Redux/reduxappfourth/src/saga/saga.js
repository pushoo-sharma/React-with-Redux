import {takeLatest,put} from "redux-saga/effects";
// takeEvery takeLatest
import {delay} from 'redux-saga';
function* ageUpAsync(){
    yield delay(40000);
    yield put({type : "AGE_UP_ASYNC",value : 1});
}
export function* watchAgeUp(){
    yield takeLatest('AGE_UP',ageUpAsync);
}