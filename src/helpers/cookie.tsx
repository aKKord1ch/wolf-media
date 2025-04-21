import Cookies from 'js-cookie'
import { ListItem } from '../../store/slices/interface/listInterface'

export const getCookie = (key: string):any => {
   return Cookies.get(key)
}

export const setCookie = (key: string, val: any, exp?: number):any => {
   Cookies.set(key, val, {expires: exp})
}

export const removeCookie = (key: string) => {
   Cookies.remove(key)
}