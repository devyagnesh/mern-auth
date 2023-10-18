import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config({});
const app = express();

app.use(express.json());
/*
    Connecting to database
*/
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log(`Connected to database`);
  })
  .catch((e) => {
    console.error(e);
  });

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const StatusCode = err.StatusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(StatusCode).json({
    success: false,
    message,
    StatusCode,
  });
});

app.listen(3000, () => {
  console.log(`Server Listening On Port 3000`);
});
