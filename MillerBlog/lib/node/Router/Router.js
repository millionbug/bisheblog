var Mysql = require("../Mysql/Mysql");

exports.Query = function(request,response){
    var query = "select * from Article";
    var mysql = new Mysql.createMysql({
        query:query,
        response:response,
        config:["id","articleName","year","date","content","category"],
    });
    mysql.Query();
};

exports.Update = function(request,response){
    var param = request.query;
    var query = "update user set name=? where id=?";
    var mysql = new Mysql.createMysql({
        query:query,
        response:response,
        param:[param.name,param.id]
    });
    mysql.Update();
};
