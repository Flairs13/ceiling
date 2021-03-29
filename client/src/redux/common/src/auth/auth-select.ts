import {AppStateType} from "../../../store";

export const getAuth = (state: AppStateType) => {
    return state.authReducer.Auth
}

export const getIsError = (state: AppStateType) => {
    return state.authReducer.isError
}

export const getIsErrorDuration = (state: AppStateType) => {
    return state.authReducer.errorDurationMin
}

export const getLogin = (state: AppStateType) => {
    return state.authReducer.login
}

export const getPassword = (state: AppStateType) => {
    return state.authReducer.password
}
