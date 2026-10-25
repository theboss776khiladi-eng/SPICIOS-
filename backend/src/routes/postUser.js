import { Router } from "express";
import bcrypt from "bcrypt";
import { validateUser, User } from "../models/User.model.js";

const postUser = Router();

postUser.post("/register", async (req, res) => {

  const { username, phone, email, password } = validateUser.parse(req.body);
  const hashedPass = await bcrypt.hash(password, 10);

  try {
    // registring user
    const userMade = await User.create({
      username: username,
      email: email,
      phone: phone,
      password: hashedPass,
    });
    res.status(201).json({ message: "user registerd succesfully" });
  } catch (error) {
    res.status(500).json({ message: "database server Error", error: error });
    console.log(`error occured${error}`);
  }
});

export default postUser;