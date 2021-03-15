import {spawn} from "redux-saga/effects";
import item from './Admin/src/profile/item-saga'
import cloth from './Admin/src/cloth/cloth-saga'





export default function* rootSaga () {
    yield spawn(item)
    yield spawn(cloth)
}
