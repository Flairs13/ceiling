import * as actions from "./catalog-action"

export const GET_PROFILE = 'catalog-reducer/GET_PROFILE'
export const SET_PROFILE = 'catalog-reducer/SET_PROFILE'

const initialState = {
    profile: [] as Array<object>
}
type InitialStateType = typeof initialState

export const catalogReducer = (state = initialState,action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state, profile: [...state.profile, action.payload.data]
            }
        }

        case GET_PROFILE: {
            return  {
                ...state
            }
        }
        default: {
            return state
        }
    }
}



type ActionType = ReturnType<InferValueType<typeof actions>>
type InferValueType<T> = T extends {[key: string]: infer U} ? U : never
