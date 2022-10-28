// Inserting data in mongo db -----
use Smilekart

db.items.insertOne({name : "Iphone Se",price:20000,rating:4.5,qty:233,sold : 98})
db.items.insertOne({name : "Iphone X",price:50000,rating:4.5,qty:233,sold : 934})
db.items.insertMany([{name : "Iphone Se",price:20000,rating:4.5,qty:233,sold : 98},{name : "Iphone 7",price:30000,rating:3.5,qty:211,sold : 18},{name : "Iphone 8",price:40000,rating:3.5,qty:211,sold : 18,isBig : false}])

db.items.find() //find inserted object



