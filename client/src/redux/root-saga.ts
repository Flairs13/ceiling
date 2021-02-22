import {spawn } from "redux-saga/effects";
import catalogSaga from "./Catalog/catalog-saga"




export default function* rootSaga () {
   yield spawn(catalogSaga)
}