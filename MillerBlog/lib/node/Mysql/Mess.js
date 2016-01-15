var mysql = require("mysql");
var client = mysql.createConnection({
    user:"root",
    password:"asd"
});
client.connect();

//client.query("use blog");
//client.query("drop table Mess");
//createMessage();
//for(var i = 0;i<3;i++) {
  //  addData();
//}
//addData();
showData();
function createMessage(){
    var query = "create table Mess(";
        query += "messageId int(11) NOT NULL AUTO_INCREMENT,";
        query += "userName varchar(30) NOT NULL,";
        query += "image varchar(60),";
        query += "content varchar(255) DEFAULT NULL,";
        query += "date timestamp(10),";
        query += "primary key (messageId)";
        query += ") ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;";
    client.query(query);
};

function addData(){
    var query = "insert into Mess(userName,image,content,date) values('小浩学长','/img/11.jpg','恭喜小浩学长建站成功。','NOW()')";
    client.query(query);
}
function showData(){
    var query = "select * from ";
    client.query(query,function(err,result){
        console.log(result)
    });
}
