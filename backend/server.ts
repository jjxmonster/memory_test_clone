import cookieSession from 'cookie-session';
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
app.use(express.json());
app.use(
   cookieSession({
      name: 'session',
      keys: ['1234'],
      maxAge: 24 * 60 * 60 * 1000,
   })
);

type newUserType = {
   googleId: string;
   name: string;
   games: object;
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
                     games: {},
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
   }
});

app.listen(port, (): void => {
   console.log('listening');
});
