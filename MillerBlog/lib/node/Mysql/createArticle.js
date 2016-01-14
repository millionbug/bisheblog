var mysql = require("mysql");
var client = mysql.createConnection({
    user:"root",
    password:"asd"
});
client.connect();
client.query("use blog");
//client.query("drop table Article");

createArticle();
for(var i = 0;i<10;i++){
    AddData();
}
AddData();
//removeData();
showData("Article");
//创建Article
function createArticle() {
    var query = "CREATE TABLE Article(";
    query += "articleId int(11) NOT NULL AUTO_INCREMENT,";
    query += "articleName varchar(30) DEFAULT NULL,";
    query += "year int(8) DEFAULT NULL,";
    query += "date varchar(20) DEFAULT NULL,";
    query += "content text DEFAULT NULL,";
    query += "categoryId int(11) DEFAULT NULL,";
    query += "PRIMARY KEY (articleId),";
    query += "foreign key(categoryId) references Category(categoryId)";
    query += ") ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;";
    client.query(query);
}
function AddData(){
    var query = "insert into Article(articleName,year,date,content,categoryId)";
        query += "values('数据库连接',2017,'2012-12-6','啊就回复就看我和反而我额和疯狂我额回复和我额开发和就',9)";
    client.query(query);
}
function removeData(){
    var query = "truncate table Article";
    client.query(query);
}
function showData(table){
    var query = "select * from "+table;
    client.query(query,function(err,results){
        if(err)
            return;
        if(results){
            console.log(results);
        }
    });
}

