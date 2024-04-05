import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Mongo is connected');
  }).catch(err =>{
    console.log(err);
  });

const app = express();

app.listen(8000, () => {
  console.log('Server is running on port 8000!!');
});
