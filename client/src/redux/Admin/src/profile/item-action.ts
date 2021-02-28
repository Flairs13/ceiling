import {DELETE_ITEM, GET_ITEM, SET_ITEM, SET_STATUS, UPDATE_ITEM, UPLOAD_ITEM} from "./item-reducer";

export const getItem = (route: string) => ({type: GET_ITEM,route} as const)
export const setItem = (payload: any) => ({type: SET_ITEM, payload} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const updateItemAction = (values: object,route: string,id: string) => ({type: UPDATE_ITEM, values,route,id}as const)
export const deleteItemAction = (id: string,route: string) => ({type: DELETE_ITEM,id,route}as const)
export const uploadItemAction = (payload: object,route: string) => ({type: UPLOAD_ITEM,payload,route}as const)

