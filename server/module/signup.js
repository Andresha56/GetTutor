import mongoose from "mongoose";
import { Schema } from "mongoose";

const signupSchema=new Schema({
    name:{
        type:String,
        require:true,
        min:[3,'Name should have alteast 3 char'],
    },
    email:{
        type:String,
        require:true,
        unique:[true,"email already used"]
    },
    password:{
        type:String,
        require:true,
        min:[7,'Password should have atleast 7 char']
    }
});
export const User=mongoose.model("Signup",signupSchema)