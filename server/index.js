import express from 'express'
import dotenv from 'dotenv'
import dbcon from './utility/db.js'
dotenv.config();

let app = express();

dbcon();

app.listen(process.env.PORT , (req,res)=>{
      console.log("server is running at port 4000");
})