//delection data items from db

db.items.deleteOne({price:20000})
db.items.deleteOne({price:50000})
db.items.deleteMany({price:20000})