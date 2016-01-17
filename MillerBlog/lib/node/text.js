var express = require("express");
var app = express();
var Mysql = require("./Mysql/Mysql2");

app.get("/Query",function(request,response){
    var query = "select * from Article where articleId=?";
    var param = request.query;
    var mysql = new Mysql.createMysql({
        database:"blog",
        response:response,
        query:query,
        param:[param.articleId],
        config:["articleId","articleName","date","categoryId"]
    });
    mysql.Query();
});

var server = app.listen(9090,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});