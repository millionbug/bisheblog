var mysql = require("mysql");
var client = mysql.createConnection({
    user:"root",
    password:"asd"
});
client.connect();

client.query("use blog");
//client.query("drop table Comment");

//createMessage();
//client.query("truncate table Comment");
//for(var i = 0;i<7;i++) {
  //  addData();
//}
showData();
function createMessage(){
    var query = "create table Comment(";
        query += "commentId int(11) NOT NULL AUTO_INCREMENT,";
        query += "userName varchar(30) NOT NULL,";
        query += "image varchar(60),";
        query += "content varchar(255) DEFAULT NULL,";
        query += "date datetime DEFAULT NULL,";
        query += "articleId int(11) NOT NULL,";
        query += "primary key (commentId),";
        query += "foreign key(articleId) references Article(articleId)";
        query += ") ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;";
    client.query(query);
};

function addData(){
    var date = new Date();
    var time = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    var query = "insert into Comment(userName,image,content,date,articleId) values('小浩学长','/img/11.jpg','恭喜小浩学长建站成功。','"+time+"',6)";
    client.query(query);
}
function showData(){
    var query = "select articleName,year,Article.date,address,categoryName,count(commentId) As total " +
        "from Article,Category,Comment where Article.categoryId=Category.categoryId " +
        "and Article.articleId = Comment.articleId;"

  //  var query = "select articleName,count(commentId) As total from Article,Comment where Article.articleId = Comment.articleId and Comment.articleId=6";
    client.query(query,function(err,result){
        if(err)
            console.log(err);
        console.log(result)
    });
}
