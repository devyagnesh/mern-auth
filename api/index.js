import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';


dotenv.config({});
const app = express();

/*
    Connecting to database
*/
mongoose.connect(process.env.MONGOURL).then(()=>{
    console.log(`Connected to database`)
}).catch(e=>{
    console.error(e);
});

app.use('/api/user',userRoute)

app.listen(3000, () => {
  console.log(`Server Listening On Port 3000`);
});
