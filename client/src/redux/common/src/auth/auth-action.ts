import {IS_AUTH, IS_ERROR} from "./auth-reducer";


export const isAuth = (flag: boolean) => ({type: IS_AUTH,flag}as const)
export const isError = (flag: boolean) => ({type: IS_ERROR,flag}as const)

