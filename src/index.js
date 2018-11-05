import express from "express";
const app = express();

import constants from "./config/constant";
import "./config/database";
import middleWareConfig from "./config/middleware";
import apiRoutes from "./module";

middleWareConfig(app)
app.listen(constants.PORT,error =>{
    if(error){
         throw error
    } else{
        console.log("APP is Running Successfully")
    }
});

app.get("/",function(req,res){
res.status(200).json("success")
});
apiRoutes(app);