import { DataResponse } from "@/components/cases-list/interface/interface";

export const setLocalStorageData = (key:string, data: any) => {
   localStorage.setItem(key, JSON.stringify(data))
}

export const getLocalStorageData = (item:string):any|'' => {
   const data  = localStorage.getItem(item)
   return data ? JSON.parse(data) : ''
}