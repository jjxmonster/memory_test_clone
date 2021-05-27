export const loginUser = async (data: object) => {
   console.log(data);
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

export const addGame = async (game: object, userId: string | undefined) => {
   console.log(game, userId);
   const requestObject = {
      userId,
      game,
   };
   const response = await fetch('http://localhost:3030/add-score', {
      method: 'POST',
      headers: {
         'Content-type': 'application/json',
      },
      body: JSON.stringify(requestObject),
   });
};

export const getGames = async (userId: string | undefined) => {
   if (userId !== undefined) {
      const response = await fetch(`http://localhost:3030/get-games/${userId}`);
      const data = await response.json();

      return data;
   } else {
      return null;
   }
};
