

const express= require("express");
const bodyParser= require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")// __dirname is node command used to let the node know the absolute path for the directory to be used. console.log laga ke check kar sakte ho..
});

app.post("/",function(req,res){
  console.log(req.body);
  res.send("The Post method works here");
});

app.listen(3000,function(){
    console.log("Server started at port 3000");
});