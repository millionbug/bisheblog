var mysql = require("mysql");
var client = mysql.createConnection({
    user:"root",
    password:"asd"
});
client.connect();

client.query("use blog");
//client.query("drop table Mess");
for(var i = 1;i<=7;i++) {
    addData(i);
}
//addData();
showData();
/*function createMessage(){
    var query = "create table Mess(";
        query += "messageId int(11) NOT NULL AUTO_INCREMENT,";
        query += "userName varchar(30) NOT NULL,";
        query += "image varchar(60),";
        query += "content varchar(255) DEFAULT NULL,";
        query += "date timestamp(10),";
        query += "primary key (messageId)";
        query += ") ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;";
    client.query(query);
};*/
function createimage(){
    var query = "create table Image(";
    query += "imageId int(11) NOT NULL AUTO_INCREMENT,";
    query += "path varchar(20),";
    query += "primary key (imageId)";
    query += ") ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;";
    client.query(query);
};
function addData(i){
    var query = "insert into Image(path) values('/img/"+i+".jpg')";
    client.query(query);
}
function showData(){
    var query = "select * from Image";
    client.query(query,function(err,result){
        console.log(result)
    });
}
