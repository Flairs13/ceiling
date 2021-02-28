import * as actions from "./item-action"

export const GET_ITEM = 'item-reducer/GET_ITEM'
export const SET_ITEM = 'item-reducer/SET_ITEM'
export const SET_STATUS = 'item-reducer/SET_STATUS'
export const UPDATE_ITEM = 'item-reducer/UPDATE_ITEM'
export const DELETE_ITEM = 'item-reducer/DELETE_ITEM'
export const UPLOAD_ITEM = 'item-reducer/UPLOAD_ITEM'

const initialState  = {
    items: [] as Array<object>,
    collection: {
        profile:  [{name:'Наименование'},
            {material: 'Материал'},
            {type: 'Тип'}, {size: 'Размер'},
            {priceOneUnit: 'Цена за шт'},
            {priceOneMetre: 'Цена за метр'},
            {technology: 'Технология'},
            {perf: 'Вид'},
            {weight: 'Вес'},] as Array<object>,
        tape: [ {name:'Наименование'}, {type: 'Тип'},  {priceOneMetre: 'Цена за метр'}, {technology: 'Технология'}] as Array<object>,
    },
    status: '',
}
type InitialStateType = typeof initialState

export const itemReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_ITEM: {
            return {
                ...state, items: [...action.payload]
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
