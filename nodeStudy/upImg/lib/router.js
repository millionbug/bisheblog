function route(hand,pathname,response,request){
    if(typeof hand[pathname] == "function"){
        hand[pathname](response,request);
    }else {
        if(pathname = "/favicon.ico") {
            response.write("favicon");
            response.end();
        } else {
            console.log("no request hander found for " + pathname);
            response.write("404 not found");
            response.end();
        }
    }
}
exports.route = route;