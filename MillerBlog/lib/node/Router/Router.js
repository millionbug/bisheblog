var Mysql = require("../Mysql/Mysql");
//查询文章列表
exports.Query = function(request,response){
    var query = "select * from Article,Category where Article.categoryId=Category.categoryId";
    var mysql = new Mysql.createMysql({
        query:query,
        response:response,
        config:["articleId","articleName","year","date","content","category","categoryName"],
    });
    mysql.Query();
};
//查询分类列表
exports.Category = function(request,response){
    var query = "select * from Category";
    var mysql = new Mysql.createMysql({
        query:query,
        response:response,
        config:["categoryId","categoryName"]
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
//根据CategoryId 查询文章
exports.QueryCategory = function(request,response){
    var param = request.query;
    var query = "select * from Article,Category where Article.categoryId=Category.categoryId and Category.categoryId=?";
    var mysql = new Mysql.createMysql({
        query:query,
        response:response,
        config:["articleId","articleName","year","date","content","category","categoryName"],
        param:[param.categoryId]
    });
    mysql.Query();
};
