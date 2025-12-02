import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./Database/dbConfig.js";

dotenv.config();

const app =express();

app.use(express.json());
app.use(cors());

dbConnect();

app.get("/",(req,res)=>{
    res.status(200).send("welcome to api")
})

const port =process.env.PORT

app.listen(port,()=>{
    console.log("server started");
    
})