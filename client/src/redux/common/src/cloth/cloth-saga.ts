import {fork,call,put,takeEvery} from "redux-saga/effects";
import {getItem, setItem, setStatus } from "./cloth-action";
import {GET_ITEM} from "./cloth-reducer";
import {getItemArr} from "../../../../api";


function* getItemWatcher() {
    yield takeEvery(GET_ITEM,getItemWorker)
}

function* getItemWorker({route}: ReturnType<typeof getItem>) {
    yield put(setStatus('loading'))
    const {response,error} = yield call(getItemArr, route)
    if (response){
        yield put(setItem(response.data))
    } else if (error) {
        console.log(error)
    }
    yield put(setStatus('complete'))
}


export default function* rootSaga () {
    yield fork(getItemWatcher)
}
