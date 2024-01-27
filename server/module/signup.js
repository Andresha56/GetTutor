import mongoose from "mongoose";
import { Schema } from "mongoose";

const signupSchema=new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    }
});
export const User=mongoose.model("Signup",signupSchema)