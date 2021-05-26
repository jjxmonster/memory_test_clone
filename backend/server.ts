import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const db: string = process.env.MONGODB_URL;
console.log(db);
mongoose
   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('MongoDB connected...'))
   .catch(err => console.log(err));
const app = express();

const port: number | string = process.env.PORT || 3030;

app.get('/', (req, res) => {
   res.end('index');
});

app.listen(port, () => {
   console.log('listening');
});
