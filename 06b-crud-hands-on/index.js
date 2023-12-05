// 1. SETUP EXPRESS
const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

// 1a. create the app
const app = express();

// 1b setup our view engine (aka template engine)
// tell Express that we are using hbs
app.set('view engine', 'hbs');

app.use(express.urlencoded({
    extended: false
}));

// 1c setup wax-on
wax.on(hbs.handlebars);

wax.setLayoutPath("./views/layouts");


app.use(express.static('public'));


let postings = [
    {
      id: 4001,
      title: "Old boardgame for sales",
      price: 11.50,
      payments: ["cod", "paynow"],
      type: "entertainment"
    },
    {
      id: 4002,
      title: "Second hand clothings",
      price: 25.00,
      payments: ["paynow"],
      type: "clothings"
    },
    {
      id: 4003,
      title: "Old LED TV",
      price: 250.00,
      payments: ["cod"],
      type: "electronic"
    }
]

// 2. CREATE ROUTES
app.get('/', function(req,res){
    res.render("index", {
        "postings": postings
    });
})


app.get('/add-posting', function(req,res){
    res.render("add-posting")
})





app.listen(3000, function(){
    console.log("Server has started");
})