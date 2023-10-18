import User from "../models/User.model.js";

export const signup = async (req, res) => {
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
    return res.status(500).json(error.message)
  }
};
