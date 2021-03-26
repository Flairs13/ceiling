import * as actions from "./item-action"


export const GET_ITEM = 'item-reducer/GET_ITEM'
export const SET_ITEM = 'item-reducer/SET_ITEM'
export const SET_STATUS = 'item-reducer/SET_STATUS'
export const UPDATE_ITEM = 'item-reducer/UPDATE_ITEM'
export const UPDATE_ITEMS = 'item-reducer/UPDATE_ITEMS'
export const DELETE_ITEM = 'item-reducer/DELETE_ITEM'
export const UPLOAD_ITEM = 'item-reducer/UPLOAD_ITEM'
export const UPLOAD_TABLE = 'item-reducer/UPLOAD_TABLE'
export const UPDATE_TABLE = 'item-reducer/UPDATE_TABLE'

const initialState  = {
    items: [] as Array<{id:number,index:number}>,
    collection: {
        profile:  [{name:'Наименование'},
            {material: 'Материал'},
            {type: 'Тип'}, {size: 'Размер'},
            {technology: 'Технология'},
            {perf: 'Вид'},
            {weight: 'Вес'},
            {priceOneMetre: 'Цена за метр'},
            {priceOneUnit: 'Цена за шт'},
        ] as Array<object>,
        tape: [ {name:'Наименование'},
            {type: 'Тип'},
            {technology: 'Технология'},
            {priceOneMetre: 'Цена за метр'},
            ] as Array<object>,
        accessories: [
            {name:'Наименование'},
            {manufacturer:'Производитель'},
            {priceOneUnit: 'Цена за шт'},
            {size: 'Размер'},
        ] as Array<object>,
        light: [
            {name:'Наименование'},
            {manufacturer:'Производитель'},
            {plinth: 'Цоколь'},
            {color: 'Цвет'},
            {power: 'Мощность'},
            {priceOneUnit: 'Цена за шт'},

        ] as Array<object>,
        constructions: [
            {name:'Наименование'},
            {type: 'Тип'},
            {priceOneMetre: 'Цена за метр'},
        ] as Array<object>,

        led: [
            {name:'Наименование'},
            {manufacturer:'Производитель'},
            {power: 'Мощность'},
            {color: 'Цвет'},
            {numberLed: 'Кол-во диодов'},
            {priceOneMetre: 'Цена за метр'},
            {priceOneUnit: 'Цена за упаковку'},
        ] as Array<object>,

        consumables: [
            {name:'Наименование'},
            {manufacturer:'Производитель'},
            {thickness: 'Толщина'},
            {size: 'Размер'},
            {priceOneMetre: 'Цена за метр'},
            {priceOneUnit: 'Цена за шт'},
            {priceOnePack: 'Цена за упаковку'},
        ] as Array<object>,

        tools: [
            {name:'Наименование'},
            {type: 'Тип'},
            {manufacturer:'Производитель'},
            {size: 'Размер'},
            {priceOneUnit: 'Цена за шт'},
        ] as Array<object>,

        additional: [
            {name:'Наименование'},
            {type: 'Тип'},
            {manufacturer:'Производитель'},
            {color: 'Цвет'},
            {size: 'Размер'},
            {priceOneMetre: 'Цена за метр'},
            {priceOneUnit: 'Цена за шт'},
            {priceOnePack: 'Цена за упаковку'},
        ] as Array<object>,
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
