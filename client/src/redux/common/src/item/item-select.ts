import {AppStateType} from "../../../store";


export const getImgObj = (state:AppStateType) => {
    return state.itemReducer.items[0]
}
export const getItems = (state:AppStateType) => {
    return state.itemReducer.items
}

export const getStatus = (state:AppStateType) => {
    return state.itemReducer.status
}

export const getCollection = (state: AppStateType) => {
    return state.itemReducer.collection
}

export const getRoutes = (state: AppStateType) => {
    return state.itemReducer.routes
}

