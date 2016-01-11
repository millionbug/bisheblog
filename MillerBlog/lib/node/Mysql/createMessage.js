var mysql = require("mysql");
var client = mysql.createConnection({
    user:"root",
    password:"asd"
});
client.connect();

client.query("use blog");

createMessage();
for(var i = 0;i<7;i++) {
    addData();
}
showData();
function createMessage(){
    var query = "create table Message(";
        query += "messageId int(11) NOT NULL AUTO_INCREMENT,";
        query += "userName varchar(30) NOT NULL,";
        query += "image varchar(60),";
        query += "content varchar(255) DEFAULT NULL,";
        query += "date varchar(30) NOT NULL,";
        query += "primary key (messageId)";
        query += ") ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;";
    client.query(query);
};

function addData(){
    var query = "insert into Message(userName,image,content,date) values('小浩学长','/img/11.jpg','恭喜小浩学长建站成功。','2016-1-11')";
    client.query(query);
}
function showData(){
    var query = "select * from Message";
    client.query(query,function(err,result){
        console.log(result)
    });
}

