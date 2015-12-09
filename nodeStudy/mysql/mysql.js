var mysql = require("mysql");
var TEST_DATABASE = "ceshi";
var TEST_TABLE = "user";

var client = mysql.createConnection({
    user:"root",
    password:"asd",
});

client.connect();
client.query("use " + TEST_DATABASE, function(err,results){
    if(err){
        console.log(err);
        client.end();
        return;
    }
    //addData();
    queryData();
    client.end();
});
var addData = function(){
     var values = [
            ["fuck1",114],
            ["fuck2",113],
            ["fuck3",112],
            ["fuck4",111],
        ];
    for(var i = 0;i<values.length;i++){
        client.query("insert into user set name=?,id=?",values[i],function(err,results){
            if(err){
                console.log("addData err"+err);
                client.end();
                return;
            }
        })
    }
};

var queryData = function(){
    client.query(
        "select * from "+ TEST_TABLE,
        function selectCb(err,results,fields){
            if(err){
                throw err;
            }
            if(results){
                for(var i = 0;i<results.length;i++){
                    console.log(results[i].id+","+results[i].name);
                }
            }
            console.log("query data successful");
        }
    );
}
