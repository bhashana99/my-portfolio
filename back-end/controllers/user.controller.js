import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";


export const registerUser = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("User created successfully!!");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
