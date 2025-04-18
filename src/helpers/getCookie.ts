export const setCookies = (data: Record<string, any>) => {
   localStorage.setItem('card', JSON.stringify(data));
}

export const getCookies = (): Record<string, any> | null => {
   const data = localStorage.getItem('card');
   return data ? JSON.parse(data) : null;
}