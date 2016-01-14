var mysql = require("mysql");
var client = mysql.createConnection({
    user:"root",
    password:"asd"
});
client.connect();
client.query("use blog");

//createCategory();
for(var i = 1;i<5;i++){
    addCategory("linux"+i);
}
showData("Category");

function removeData(){
    var query = "truncate table Category";
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


//创建分类
function createCategory(){
    var query = "create table Category(";
        query += "categoryId int(11) NOT NULL AUTO_INCREMENT,";
        query += "categoryName varchar(30) DEFAULT NULL,";
        query += "PRIMARY KEY (categoryId)";
        query += ") ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;";
    client.query(query);
}
function addCategory(name){
    var query = "insert into Category(categoryName) values('"+name+"')";
    client.query(query);
}
