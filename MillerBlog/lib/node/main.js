var express = require('express');
var Router = require("./Router/Router");
var app = express();

app.use(express.static('../public'));

app.get('/',function(request,response){
    response.sendFile(__dirname+"/html/index.html");
});
app.get("/aboutMe",function(request,response){
    response.sendFile(__dirname+"/html/aboutMe.html");
});
app.get("/about",function(request,response){
    response.sendFile(__dirname+"/html/about.html");
});
app.get("/blog",function(request,response){
    response.sendFile(__dirname+"/html/blogAll.html");
});
app.get("/blogDetail",function(request,response){
    response.sendFile(__dirname+"/html/blogDetail.html");
});
app.get("/Query",Router.Query);
app.get("/Update",Router.Update);
app.get("/Category",Router.Category);

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});

