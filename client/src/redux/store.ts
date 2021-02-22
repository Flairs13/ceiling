import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import CreateSagaMiddleware from 'redux-saga'

import rootSaga from "./root-saga";
import {catalogReducer} from "./Catalog/catalog-reducer";



let reducers = combineReducers ({
    catalogReducer
})


type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

const sagaMiddleware = CreateSagaMiddleware()

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore (reducers, composeEnhancers (applyMiddleware (sagaMiddleware)))
sagaMiddleware.run(rootSaga)



// @ts-ignore
window.store = store

export default store