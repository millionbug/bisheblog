var mysql = require("mysql");
var client = mysql.createConnection({
    user:"root",
    password:"asd"
});
client.connect();
client.query("use blog");

//createArticle();
/*for(var i = 0;i<10;i++){
    AddData();
}*/
//removeData();
showData();
//创建Article
function createArticle() {
    var query = "CREATE TABLE Article(";
    query += "id int(11) NOT NULL AUTO_INCREMENT,";
    query += "articleName varchar(30) DEFAULT NULL,";
    query += "year int(8) DEFAULT NULL,";
    query += "date varchar(20) DEFAULT NULL,";
    query += "content text DEFAULT NULL,";
    query += "category int(11) DEFAULT NULL,";
    query += "PRIMARY KEY (id)";
    query += ") ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;";
    client.query(query);
}
function AddData(){
    var query = "insert into Article(articleName,year,date,content,category)";
        query += "values('数据库连接',2015,'2012-12-6','jkhrgkljwrlgwkrgelk',12)";
    client.query(query);
}
function removeData(){
    var query = "truncate table Article";
    client.query(query);
}
function showData(){
    var query = "select * from Article";
    client.query(query,function(err,results){
        if(err)
            return;
        if(results){
            console.log(results);
        }
    });
}
//创建留言
