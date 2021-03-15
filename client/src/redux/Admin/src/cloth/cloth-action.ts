import {GET_ITEM, SET_ITEM, SET_STATUS} from "./cloth-reducer";


export const getItem = (route: string) => ({type: GET_ITEM,route} as const)
export const setItem = (payload: any) => ({type: SET_ITEM, payload} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)