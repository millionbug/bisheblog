var express = require("express");
var fs = require("fs");
var app = express();

//app.user(express.bodyParser());

app.get("/",function(req,res){
   res.sendFile(__dirname+"/FromData.html");
});

app.get("/index.html",function(res,rep){
   var file = res.files.myfile;
    console.log(res)
    console.log(file)
});

app.listen(9000,function(){
    console.log("链接成功");
});