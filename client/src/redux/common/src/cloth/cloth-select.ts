import {AppStateType} from "../../../store";


export const getItems = (state:AppStateType) => {
    return state.clothReducer.items
}

export const getStatus = (state:AppStateType) => {
    return state.clothReducer.status
}


