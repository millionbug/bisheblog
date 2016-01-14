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
//查询留言
exports.QueryMessage = function(request,response){
    var query = "select userName,image,content,DATE_FORMAT(date,'%Y-%m-%d %H:%i:%s') As date from Message";
    var mysql = new Mysql.createMysql({
        query:query,
        response:response,
        config:["userName","image","content","date"],
    });
    mysql.Query();
};
//提交留言
exports.SubmitMessage = function(request,response){
    var date = new Date();
    var param = request.query;
    var time = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

    var query = "insert into Message(userName,image,content,date) values(?,?,?,?)";
    var mysql = new Mysql.createMysql({
        query:query,
        response:response,
        param:[param.userName,"/img/12.jpg",param.messageContent,time],
    });
    mysql.Add();
};
//提交留言
exports.ArticleContent = function(request,response){
    var param = request.query;
    var query = "select articleName,date,content,categoryName from Article,Category where Article.categoryId = Category.categoryId and articleId=?";
    var mysql = new Mysql.createMysql({
        query:query,
        response:response,
        config:["articleName","date","content","categoryName"],
        param:[param.articleId],
    });
    mysql.Query();
};
