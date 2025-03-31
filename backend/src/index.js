import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./DB/indexDB.js";


dotenv.config({
    path:"./env"
});
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server started at http://localhost:${process.env.PORT}`);
        
    })
    
})
.catch((err)=>{
    console.log(err);
    // process.exit(1);
    
})
app.get("/",(req,res)=>{
    res.send("Hello World");
})