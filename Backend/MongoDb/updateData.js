// Updating data items in mongo DB

db.items.updateOne({name:"Iphone Se"},{$set:{name:"Iphone Se2"}})
db.items.updateOne({name:"Iphone Se2"},{$set:{name:"Iphone Se2" ,price:45000}})
db.items.updateMany({rating:4.5},{$set:{rating:4.6}})


//Creating Another collections
db.anotherCollection.insertOne({a:89})
