import * as actions from "./cloth-action"

export const GET_ITEM = 'cloth-reducer/GET_ITEM'
export const SET_ITEM = 'cloth-reducer/SET_ITEM'
export const SET_STATUS = 'cloth-reducer/SET_STATUS'


const initialState  = {
    items: [] as Array<object>,
    status: '',
}
type InitialStateType = typeof initialState

export const clothReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_ITEM: {
            return {
                ...state, items: [...action.payload]
            }
        }

        case SET_STATUS: {
            return {
                ...state,status: action.status
            }
        }
        default: {
            return state
        }
    }
}



type ActionType = ReturnType<InferValueType<typeof actions>>
type InferValueType<T> = T extends {[key: string]: infer U} ? U : never
