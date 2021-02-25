import * as actions from './auth-action'
export const IS_AUTH = 'auth-reducer/IS_AUTH'

const initialState = {
    Auth: true
}
type InitialStateType = typeof initialState

export const authReducer = (state = initialState,action: ActionType): InitialStateType => {
    switch (action.type) {
        case IS_AUTH: {
            return {
                ...state, Auth: action.flag
            }
        }

        default: {
            return state
        }
    }
}


type ActionType = ReturnType<InferValueType<typeof actions>>
type InferValueType<T> = T extends {[key: string]: infer U} ? U : never
