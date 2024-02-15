import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js'
dotenv.config()
mongoose
  .connect(
    process.env.MONGO
)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();


app.use('/user', userRoute);

app.listen(3000, () => {
  console.log("server is running on the port 3000");
});


