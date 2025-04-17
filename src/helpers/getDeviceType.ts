import { headers } from "next/headers"

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export const getDeviceType = async():Promise<DeviceType> => {
   let userAgent = (await headers()).get("user-agent") || ""

   if (/Mobi|Android/i.test(userAgent)) return "mobile"
   else if(/Tablet|iPad/i.test(userAgent)) return "tablet"
   else return "desktop"
}