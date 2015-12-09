var node = require("./node");
var route = require("./router");
var requestHander = require("./requestHander");
/**
 *添加路由
 */
var hand = {};
hand["/"] = requestHander.start;
hand["/start"] = requestHander.start;
hand["/upload"] = requestHander.upload;
hand["/show"] = requestHander.show;

function create(){
    node.start(route.route,hand);
}
exports.create = create;
