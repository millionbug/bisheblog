var mysql = require("mysql");
var client = mysql.createConnection({
    user:"root",
    password:"asd"
});
client.connect();

client.query("use blog");
//client.query("drop table Message");

//createMessage();
//client.query("truncate table Message");
//for(var i = 0;i<7;i++) {
    addData();
//}
showData();
function createMessage(){
    var query = "create table Message(";
        query += "messageId int(11) NOT NULL AUTO_INCREMENT,";
        query += "userName varchar(30) NOT NULL,";
        query += "image varchar(60),";
        query += "content varchar(255) DEFAULT NULL,";
        query += "date datetime DEFAULT NULL,";
        query += "primary key (messageId)";
        query += ") ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;";
    client.query(query);
};

function addData(){
    var date = new Date();
    var time = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    var query = "insert into Message(userName,image,content,date) values('小浩学长','/img/11.jpg','恭喜小浩学长建站成功。','"+time+"')";
    client.query(query);
}
function showData(){
    var query = "select * from Message";
    client.query(query,function(err,result){
        console.log(result)
    });
}
