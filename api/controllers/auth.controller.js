import { ErrorHandler } from "../Utils/Error.js";
import User from "../models/User.model.js";

export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;

  const newUser = new User({
    username,
    email,
    password,
  });

  try {
    await newUser.save();
    return res.status(201).json({
      message: "user created succesfully",
    });
  } catch (error) {
    return next(ErrorHandler(300, error.message));
  }
};
