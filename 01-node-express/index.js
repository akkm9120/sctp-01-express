//Require Express
const express= require('express'); 

//create an Express application 
const app=express();

app.get("/",function(req,res){
    res.send("hELLO World")
})

//Listen for connections at specific port

app.listen(8000,function(){
    console.log("server has started")
});