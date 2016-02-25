var Mysql = require("../Mysql/Mysql");
//查询文章列表
exports.Query = function(request,response){
    var param = request.query;
    var cb = param.callback;
    cb+"("+"{result:'wefwef'}"+")";
    var query = "select * from Article,Category where Article.categoryId = Category.categoryId order by articleId DESC;";
    var mysql = new Mysql.createMysql({
        query:query,
        response:response,
        config:["articleId","articleName","year","date","address","categoryName"],
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
//查询评论数
exports.Comment = function(request,response){
    var query = "select articleId,count(CommentId) as total from Comment group by articleId";
    var mysql = new Mysql.createMysql({
        query:query,
        response:response,
        config:["articleId","total"]
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

    var query = "select * from Article,Category where Article.categoryId=Category.categoryId and Category.categoryId=? order by articleId DESC;";
    var mysql = new Mysql.createMysql({
        query:query,
        response:response,
        config:["articleId","articleName","year","date","address","category","categoryName"],
        param:[param.categoryId]
    });
    mysql.Query();
};
//查询留言
exports.QueryMessage = function(request,response){
    var query = "select userName,image,content,DATE_FORMAT(date,'%Y年%m月%d日 %H:%i:%s') As date from Message";
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

//根据articleId查询评论
exports.QueryComment = function(request,response){
    var param = request.query;
    var query = "select userName,image,content,DATE_FORMAT(date,'%Y年%m月%d日 %H:%i:%s') As date from Comment where articleId=?";
    var mysql = new Mysql.createMysql({
        query:query,
        response:response,
        config:["userName","image","content","date"],
        param:[param.articleId]
    });
    mysql.Query();
};
//提交留言
exports.SubmitComment = function(request,response){
    var date = new Date();
    var param = request.query;
    var time = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

    var query = "insert into Comment(userName,image,content,date,articleId) values(?,?,?,?,?)";
    var mysql = new Mysql.createMysql({
        query:query,
        response:response,
        param:[param.userName,"/img/12.jpg",param.messageContent,time,param.articleId],
    });
    mysql.Add();
};
//添加文章
exports.addArticle = function(request,response){
    var param = request.query;
    var query = "insert into Article(articleName,year,address,date,categoryId) values(?,?,?,?,?);";
    var mysql = new Mysql.createMysql({
        query:query,
        response:response,
        param:[param.articleName,param.year,param.address,param.date,param.categoryId],
    });
    mysql.Add();
};
