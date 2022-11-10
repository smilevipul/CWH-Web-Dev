const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require("body-parser")


// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/contactDance');
  
//   await mongoose.connect('mongodb://user:password@localhost:27017/test');// if your database has auth enabled
}

const contactSchema = new mongoose.Schema({
    // name :{
    //     type:String,
    //     require:true
    // },
    // age :{
    //     type:String,
    //     require:true
    // },
    // gender :{
    //     type:String,
    //     require:true
    // },
    // phone :{
    //     type:String,
    //     require:true,
    //     // unique:true
    // },
    // email :{
    //     type:String,
    //     require:true,
    //     // unique:true

    // },
    // address :{
    //     type:String,
    //     require:true
    // }

    
    
    name: String,
    age: String,
    gender: String,
    phone: String,
    email: String,
    address: String,
});

const Contact = mongoose.model('Contact', contactSchema);




const port = 9000;


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
// app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {};
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    
    res.status(200).render('contact.pug');
})


app.post('/contact', (req, res)=>{

    // try {
    //     const contactDanceData = new Contact({
    //         name : req.body.name,
    //         age: req.body.age,
    //         gender : req.body.gender,
    //         phone : req.body.phone,
    //         email : req.body.email,
    //         address : req.body.address,
    //     })

    //     const contactDance = await contactDanceData.save();
    //     res.status(201).rende("index")

    // } catch (error) {
    //     res.status(400).send("please enter valid credential")
    // }

    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("this item has been saved in database")
    }).catch(()=>{
        res.status(400).send("the item was not saved in db")
    });
})

//starting server
app.listen(port,()=>{
    console.log(`This applocation started successfully on port ${port}`);
});