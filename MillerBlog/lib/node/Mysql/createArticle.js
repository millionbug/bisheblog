var mysql = require("mysql");
var client = mysql.createConnection({
    user:"root",
    password:"asd"
});
client.connect();
client.query("use blog");
//client.query("drop table Article");

//createArticle();
//removeData();
AddData();
showData("Article");
//创建Article
function createArticle() {
    var query = "CREATE TABLE Article(";
    query += "articleId int(11) NOT NULL AUTO_INCREMENT,";
    query += "articleName varchar(30) DEFAULT NULL,";
    query += "year int(8) DEFAULT NULL,";
    query += "date varchar(20) DEFAULT NULL,";
    query += "address varchar(20) NOT NULL,";
    query += "categoryId int(11) DEFAULT NULL,";
    query += "PRIMARY KEY (articleId),";
    query += "foreign key(categoryId) references Category(categoryId)";
    query += ") ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;";
    client.query(query);
}
function AddData(){
    var query = "insert into Article(articleName,year,date,address,categoryId)";
        query += "values('2015总结',2016,'2016-1-14','/create_blog',12)";
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
