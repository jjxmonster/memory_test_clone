import express, { json } from 'express';
import dotenv from 'dotenv';
import mongo from 'mongodb';
import cors from 'cors';

dotenv.config();

const app = express();
const dbUrl: string = process.env.MONGODB_URL;
const port: number | string = process.env.PORT || 3030;
const client = new mongo.MongoClient(dbUrl);
app.use(cors());
app.use(json());

type newUserType = {
   googleId: string;
   name: string;
   games: object[];
};

client.connect(err => {
   if (err) {
      console.log('error');
   } else {
      console.log('MongoDB connected...');
      const db = client.db('memory-test-users');
      const users = db.collection('users');

      app.post('/add-user', (req, res): void => {
         const { googleId, name } = req.body.data.profileObj;
         users.findOne({ googleId }, (error, data) => {
            if (error) {
               console.log('error');
            } else {
               if (data === null) {
                  const newUser: newUserType = {
                     googleId,
                     name,
                     games: [],
                  };
                  users.insertOne(newUser, () => {
                     res.send({ user: newUser });
                  });
               } else {
                  res.send({ user: data });
               }
            }
         });
      });

      app.post('/add-score', (req, res): void => {
         const { game, userId } = req.body;

         users.findOne({ googleId: userId }, (error, data) => {
            if (error) {
               console.log('error');
            } else {
               if (data !== null) {
                  const { games } = data;
                  const newGamesArray = [...games, game];
                  users.updateOne(
                     { googleId: userId },
                     { $set: { games: newGamesArray } }
                  );
               } else res.end();
            }
         });
      });

      app.get('/get-games/:id', (req, res): void => {
         const { id } = req.params;
         if (id === undefined) {
            res.end('undefined');
         } else {
            users.findOne({ googleId: id }, (error, data) => {
               if (error) {
                  console.log('error');
               } else {
                  res.send(data.games);
               }
            });
         }
      });
   }
});

app.listen(port, (): void => {
   console.log('listening');
});
