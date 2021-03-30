import * as actions from './auth-action'
export const IS_AUTH = 'auth-reducer/IS_AUTH'
export const IS_ERROR = 'auth-reducer/IS_ERROR'

const initialState = {
    Auth: false,
    errorDurationMin: 3 * 60 * 1000,
    isError: false,
    login: 'paq-diller@yandex.ru',
    password: 'w9753w9753'
}
type InitialStateType = typeof initialState

export const authReducer = (state = initialState,action: ActionType): InitialStateType => {
    switch (action.type) {
        case IS_AUTH: {
            return {
                ...state, Auth: action.flag
            }
        }

        case IS_ERROR: {
            return {
                ...state, isError: action.flag
            }
        }

        default: {
            return state
        }
    }
}


type ActionType = ReturnType<InferValueType<typeof actions>>
type InferValueType<T> = T extends {[key: string]: infer U} ? U : never
