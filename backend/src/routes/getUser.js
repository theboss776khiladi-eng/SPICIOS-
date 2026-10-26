import { Router } from "express";
import { User } from "../models/User.model.js";
import { ProductRegister } from "../models/Products.model.js";


const getUser = Router();

getUser.get("/user",async(req,res,next) => {
    const user = await User.find();
    res.status(200).json({success: true, users: user})
})
getUser.get("/products",async(req,res, next) => {
    const produts = await ProductRegister.find()
    res.status(200).json({success: true, produts: produts})
})

export default getUser;