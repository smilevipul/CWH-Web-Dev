const express = require("express");
const mongoose = require("mongoose");
port = 8080;

const app = express();

mongoose.connect("mongodb+srv://smilevipul:Mongodb@cluster0.2k1b621.mongodb.net/test"),
{
    useUnifiedTopology:true,
    useNewUrlParser:true

}

app.get("/",(req,res)=>{
    res.send("Check server is running");

});

app.listen(port,()=>{
    console.log("runnnig");
})