const express= require("express");

const app=express();

// app.get("/",function(req,res){
//     res.send("Hello World  !")
// });

app.get("/",function(req,res){
    res.send(__dirname+"/index.html")// __dirname is node command used to let the node know the absolute path for the directory to be used. console.log laga ke check kar sakte ho..
});


app.listen(3000,function(){
    console.log("Server started at port 3000");
});