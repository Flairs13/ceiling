import {AppStateType} from "../store";

export const getImgObj = (state:AppStateType) => {
    return state.catalogReducer.profile[0]
}
