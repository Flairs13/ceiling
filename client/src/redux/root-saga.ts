import {spawn} from "redux-saga/effects";
import item from './common/src/item/item-saga'
import cloth from './common/src/cloth/cloth-saga'





export default function* rootSaga () {
    yield spawn(item)
    yield spawn(cloth)
}
