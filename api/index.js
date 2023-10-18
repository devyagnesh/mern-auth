import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';

dotenv.config({});
const app = express();

app.use(express.json());
/*
    Connecting to database
*/
mongoose.connect(process.env.MONGOURL).then(()=>{
    console.log(`Connected to database`)
}).catch(e=>{
    console.error(e);
});

app.use('/api/user',userRoute);
app.use('/api/auth',authRoute);

app.listen(3000, () => {
  console.log(`Server Listening On Port 3000`);
});
