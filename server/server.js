import { connectToDB } from "./connection/DataBase.js";
import express from "express";
import userRouter from "./route/signUpRoute.js";
import cors from "cors";

// ----server---
const server=express();
// ---mongooseDB----
connectToDB();
// ---middle--wares----
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:false}));
server.use(userRouter);


server.listen(5000,console.log("server is running....."));


