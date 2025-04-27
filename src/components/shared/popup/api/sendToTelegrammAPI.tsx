export default async function sendToTelegrammAPI(formData: { name: string; phone: string; message: string }) {
   const response = await fetch("/api/sendMessageFromBot", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(formData), // Передаем formData напрямую
   });
 
   if (!response.ok) {
     throw new Error("Network response was not ok");
   }
 
   const data = await response.json();
   
   return data;
 }