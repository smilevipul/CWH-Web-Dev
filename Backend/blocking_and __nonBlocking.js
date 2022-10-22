// Synchronous or bocking 
// line by line execution


// Asynchronus or non - blocking 
//line by line execution is not guarented 

const fs = require("fs")
fs.readFile("vip.txt" , "utf-8", (err,data)=>{
    console.log(data);
});

console.log("this is message");