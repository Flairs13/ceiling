import * as actions from "./item-action"

export const GET_ITEM = 'item-reducer/GET_ITEM'
export const SET_ITEM = 'item-reducer/SET_ITEM'
export const SET_STATUS = 'item-reducer/SET_STATUS'

const initialState = {
    items: [] as Array<object>,
    status: '',
}
type InitialStateType = typeof initialState

export const itemReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_ITEM: {
            return {
                ...state, items: [...action.payload,...state.items]
            }
        }

        case GET_ITEM: {
            return  {
                ...state
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
