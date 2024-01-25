

import { Router } from "express";
import { signup } from "../controller/signup.js";
const userRouter=Router();

userRouter.post("/user/signup",signup);

export default userRouter;