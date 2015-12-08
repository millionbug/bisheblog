var http = require("http");
var url = require("url");
function start(route,handle){
    function onRequest(request,response){
        var path = url.parse(request.url).pathname;
        route(handle,path,response,request);
    };
    http.createServer(onRequest).listen(8888);
    console.log("start...")
}
exports.start = start;