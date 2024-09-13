import mongoose from 'mongoose'

let dbcon = ()=>{
    try{
          mongoose.connect(process.env.DB_URL);
          console.log("connected to backend successfully");
    }
    catch(err){
        console.log("there is an internal error");
        console.log(err);
    }
}

export default dbcon;