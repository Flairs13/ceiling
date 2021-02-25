import {fork,call,throttle, put,takeEvery} from "redux-saga/effects";
import {GET_ITEM} from "./item-reducer";
import {setItem, setStatus} from "./item-action";
import {getItemArr} from "../../../../api";
import {getItem} from "../profile/item-action"


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
