export const addUser = async (data: object): Promise<Response> => {
   const response = await fetch('http://localhost:3030/add-user', {
      method: 'POST',
      headers: {
         'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
   });

   return response;
};
