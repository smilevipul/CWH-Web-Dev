const fs = require("fs"); //includig module
let text = fs.readFileSync("vip.txt" , "utf-8");

text = text.replace("VIP","TOP");
console.log(text);




console.log("Creating new file");
fs.writeFileSync("top.txt",text);


