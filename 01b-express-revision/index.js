const express = require('express');

let app = express();

app.get("/", function(req,res){
  res.send("Hello world");
})

app.get("/color/:x", function(req,res){
  
  res.send(req.params.x.toUpperCase());
})

app.get("/sum", function(req,res){
  let x = req.query.num1 ;
  let y= req.query.num2 ; 
  let sum = x+y; 
  res.send("the Sun Is :"+sum)
})

app.listen(3000, function(){
  console.log("Server has started")
});