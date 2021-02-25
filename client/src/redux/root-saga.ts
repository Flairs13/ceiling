import {spawn} from "redux-saga/effects";
import item from './Admin/src/profile/item-saga'





export default function* rootSaga () {
    yield spawn(item)
}
