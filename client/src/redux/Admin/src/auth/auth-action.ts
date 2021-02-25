import {IS_AUTH} from "./auth-reducer";


export const isAuth = (flag: boolean) => ({type: IS_AUTH,flag}as const)
