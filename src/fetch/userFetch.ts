export const addUser = async (data: object) => {
   const response = await fetch('http://localhost:3030/add-user', {
      method: 'POST',
      headers: {
         'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
   });
   const user = await response.json();

   return user.user;
};
