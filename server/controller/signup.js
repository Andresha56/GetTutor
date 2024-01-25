
import { User } from "../module/signup.js"

export const signup=async(req,res)=>{
   try{
    const {name,email,password}=req.body;
    await User.create({name,email,password});
    res.send("ok");
    console.log("success")
   }
   catch(e){
    console.log(e)
    console.log(e.password);
   };
}
