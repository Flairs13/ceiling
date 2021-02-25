import {AppStateType} from "../../../store";

export const getAuth = (state: AppStateType) => {
    return state.authReducer.Auth
}
