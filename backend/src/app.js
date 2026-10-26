import express from "express";
import cors from "cors"
import postUser from "./routes/postUser.js";
import Get from "./routes/getUser.js";
export const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", postUser)
app.use("/",Get)

