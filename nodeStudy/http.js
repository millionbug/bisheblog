var http = require("http");
var url = require("url");
var qs = require("querystring");
var server = http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url).query;
    console.log(pathname);

    console.log(qs.parse(query).hehe);
});
server.listen(8000);
