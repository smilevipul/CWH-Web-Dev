//searching for data in mongo db

db.items.find({price : 20000})  //for finding filtered data
db.items.find({price : {$gte:20000}})  //for finding filtered data
db.items.find({price : {$gt:20000}})  //for finding filtered data
db.items.find({price : {$lt:20000}})  //for finding filtered data
db.items.find({price : {$lte:20000}})  //for finding filtered data

//and OperATOR
db.items.find({price : {$lte:20000},rating:{$lte:4.5}})  //for finding filtered data

//or operator
db.items.find({$or:[
    {price : {$lte:20000}},{rating:{$lte:4.5}}
]})


db.items.find({price : 20000},{rating:1})  //for finding filtered data
