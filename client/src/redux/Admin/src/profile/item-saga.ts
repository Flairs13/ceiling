import {fork,call,throttle, put,takeEvery} from "redux-saga/effects";
import {DELETE_ITEM, GET_ITEM, UPDATE_ITEM, UPLOAD_ITEM} from "./item-reducer";
import {setItem, setStatus, deleteItemAction, getItem, updateItemAction, uploadItemAction} from "./item-action";
import {deleteItem, getItemArr, updateItem, uploadItem} from "../../../../api";




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



function* uploadItemWatcher() {
    yield takeEvery(UPLOAD_ITEM,uploadItemWorker)
}

function* uploadItemWorker({payload,route} : ReturnType<typeof uploadItemAction>) {
    const {response,error} = yield call(uploadItem, payload,route)
    if (response){
        yield  put(getItem(route))
    } else if (error) {
        console.log(error)
    }
}







function* updateItemWatcher() {
    yield takeEvery(UPDATE_ITEM,updateItemWorker)
}

function* updateItemWorker({values,route,id} : ReturnType<typeof updateItemAction>) {
    const {response,error} = yield call(updateItem, values,route,id)
    if (response){
        yield  put(getItem(route))
    } else if (error) {
        console.log(error)
    }
}


function* deleteItemWatcher() {
    yield takeEvery(DELETE_ITEM,deleteItemWorker)
}

function* deleteItemWorker({id,route} : ReturnType<typeof deleteItemAction>) {
    const {response,error} = yield call(deleteItem, id,route)
    if (response){
        yield  put(getItem(route))
    } else if (error) {
        console.log(error)
    }
}

export default function* rootSaga () {
    yield fork(getItemWatcher)
    yield fork(updateItemWatcher)
    yield fork(deleteItemWatcher)
    yield fork(uploadItemWatcher)
}
