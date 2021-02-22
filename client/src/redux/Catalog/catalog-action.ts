import {GET_PROFILE, SET_PROFILE} from "./catalog-reducer";

export const getProfile = () => ({type: GET_PROFILE} as const)
export const setProfile = (payload: any) => ({type: SET_PROFILE, payload} as const)