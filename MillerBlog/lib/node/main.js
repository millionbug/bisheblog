var express = require('express');
var Mysql = require("./Mysql/Mysql");
var Router = require("./Router/Router");
var formidable = require("formidable");
var fs = require("fs");
var app = express();

app.use(express.static('../public'));

app.get('/',function(request,response){
    response.sendFile(__dirname+"/html/index.html");
});
app.get('/User',function(request,response){
    response.sendFile(__dirname+"/html/User.html");
});
app.get('/admin',function(request,response){
    response.sendFile(__dirname+"/html/admin.html");
});
app.get('/img',function(request,response){
    response.sendFile(__dirname+"/html/image.html");
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
app.get("/CategoryDetail",function(request,response){
    response.sendFile(__dirname+"/html/CategoryDetail.html");
});
app.get("/message",function(request,response){
    response.sendFile(__dirname+"/html/message.html");
});
app.get("/addArticle",function(request,response){
    response.sendFile(__dirname+"/html/AddArticle.html");
});

//博客地址
app.get("/create_blog",function(request,response){
    response.sendFile(__dirname+"/blog/62015Summary.html");
});
app.get("/mysql_node",function(request,response){
    response.sendFile(__dirname+"/blog/7mysql_node.html");
});
app.get("/nginx_linux",function(request,response){
    response.sendFile(__dirname+"/blog/8nginx_linux.html");
});
app.get("/jquery_study",function(request,response){
    response.sendFile(__dirname+"/blog/9jquery_study.html");
});
app.get("/react_style",function(request,response){
    response.sendFile(__dirname+"/blog/10react_study.html");
});
app.get("/Query",Router.Query);
app.get("/QueryImage",Router.QueryImage);
app.get("/DelArticle",Router.DelArticle);
app.get("/DelCategory",Router.DelCategory);
app.get("/DelImage",Router.DelImage);
app.get("/Update",Router.Update);
app.get("/Category",Router.Category);
app.get("/Comment",Router.Comment);
app.get("/QueryCategory",Router.QueryCategory);
app.get("/QueryMessage",Router.QueryMessage);
app.get("/SubmitMessage",Router.SubmitMessage);
app.get("/QueryComment",Router.QueryComment);
app.get("/SubmitComment",Router.SubmitComment);
app.get("/appendArticle",Router.addArticle);
app.get("/addCategory",Router.addCategory);
app.post("/upload",function(request,response){
    var form = new formidable.IncomingForm();
    form.parse(request,function(error,fields,files){
        fs.renameSync(files.upload.path,"/tmp/"+files.upload.name);
        fs.createReadStream("/tmp/"+files.upload.name).pipe(fs.createWriteStream(__dirname+"/../public/img/"+files.upload.name));
        var query = "insert into Image(path) values(?)";
        var mysql = new Mysql.createMysql({
            query:query,
            response:response,
            param:["/img/"+files.upload.name],
            callback:function(){
                response.sendFile(__dirname+"/html/User.html");
            }
        });
        mysql.Add();
    });
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});

