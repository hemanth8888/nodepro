import mongoose from "mongoose";
import constants from "./constant"

mongoose.Promise = global.Promise;

try{
mongoose.connect( constants.Mongo_Url,{useNewUrlParser: true});
} catch(err){
    console.log("DB is Not Running");
} 

mongoose.connection.once("open",() => console.log("DB Is COnnected"))
                    .on("error", () =>{
                        throw "MongoDb err";
                    })