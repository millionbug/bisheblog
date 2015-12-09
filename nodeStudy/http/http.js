var http = require("http");
var url = require("url");
var qs = require("querystring");
var server = http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url).query;
    var querystring = qs.parse(query);
    console.log(pathname);

    console.log(querystring.hehe);
});
server.listen(8000);
