import he from 'he'

export default function decodeString(htmlString:string):string {
   return he.decode(htmlString)
}