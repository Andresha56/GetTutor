


import mongoose from "mongoose";
const PORT='mongodb://localhost:27017';

export const connectToDB=async()=>{
    try{
        await mongoose.connect(PORT,{
            dbName:"SigUpData"
        });
        console.log("data base connected successfully..")
    }
    catch(e){
        console.log("Unable to connect to the database");
        console.log(e);
    }
}