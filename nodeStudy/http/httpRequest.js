var http = require("http");

//http.get("http://www.millerblog.cn",function(response){
//    console.log(response.headers);
//});
var options = {
    hostname: 'www.millerblog.cn',
    port: 80,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

var request = http.request(options, function (response) {});

request.write('Hello World');
request.end();