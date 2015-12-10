var express = require("express");
var app = express();

app.get("/",function(req,res){
    console.log("get request");
    res.send("hello get");
});

app.post("/post",function(req,res){
    res.send("hello post");
});

app.get("/index",function(req,res){
   res.send("index html");
});

app.get("/fuck",function(req,res){
   res.send("this is reglax");
});

var server = app.listen(8080,function(){
   var host = server.address().address;
    var port = server.address().port;
    console.log("网站： http://%s:%s",host,port);
});