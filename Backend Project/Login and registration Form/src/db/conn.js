const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/myEmployee",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true

}).then(()=>{
    console.log(`Connection successfull`);
}).catch((e)=>{
    console.log(`No connection`);
})