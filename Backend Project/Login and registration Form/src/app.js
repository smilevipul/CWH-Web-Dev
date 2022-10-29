const express = require("express");
const path = require("path");
const app = express();
require("../src/db/conn");

const port = process.env.PORT || 3000;

// console.log()

// const static_path = path.join(path.join(__dirname,"public/index.html"))

// app.use(express.static())


app.get("/",(req,res)=>{
    res.send("Hello from vipul")
});

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})
