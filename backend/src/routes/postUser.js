import { Router } from "express";
import bcrypt from "bcrypt";
import { validateUser, User } from "../models/User.model.js";
import { validateProduct, ProductRegister } from "../models/Products.model.js";

const postUser = Router();

postUser.post("/register", async (req, res, next) => {
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
    res
      .status(201)
      .json({ success: true, message: "user registerd succesfully" });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
    console.log(`error occured: ${error}`);
  }
});

//register the products

postUser.post("/products/register", async (req, res, next) => {
  const { name, description, tags, price, ExpiryDate } = validateProduct.parse(req.body);
  try {
    const productDone = await ProductRegister.create({
      name: name,
      description: description,
      tags: tags,
      price: price,
      ExpiryDate: ExpiryDate,

      // also have to create the bySeller feild later on
    });
    res
      .status(201)
      .json({ success: true, message: "product register successfully!" });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
    console.log(error);
  }
});

export default postUser;
