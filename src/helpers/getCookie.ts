export const setCookies = (data:object) => {
   localStorage.setItem('card', JSON.stringify(data))
}

export const getCookies:object = () => {
   return JSON.stringify(localStorage.getItem('card'))
}