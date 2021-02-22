import {fork,call,throttle, put,takeEvery} from "redux-saga/effects";
import {GET_PROFILE} from "./catalog-reducer";
import {getProfile} from "../../api";
import {setProfile} from "./catalog-action";

function* getProfileWatcher() {
   yield takeEvery(GET_PROFILE,getProfileWorker)
}

function* getProfileWorker() {
    const {response,error} = yield call(getProfile)
    if (response){
        yield put(setProfile(response))
    } else if (error) {
        console.log(error)
    }
}


export default function* rootSaga () {
    yield fork(getProfileWatcher)
}