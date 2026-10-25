import { Router } from "express";

const getUser = Router();

getUser.get("/user",async(req,res) => {
    res.status(200).json({message:"giving user details"})
})
getUser.get("/user/post",async(req,res) => {
    res.status(200).json({message:"giving user post"})
})

export default getUser;