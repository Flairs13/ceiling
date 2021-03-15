import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import CreateSagaMiddleware from 'redux-saga'

import rootSaga from "./root-saga";
import {itemReducer} from "./Admin/src/profile/item-reducer";
import {authReducer} from "./Admin/src/auth/auth-reducer";
import {clothReducer} from "./Admin/src/cloth/cloth-reducer";




let reducers = combineReducers ({
    itemReducer,
    authReducer,
    clothReducer,
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
