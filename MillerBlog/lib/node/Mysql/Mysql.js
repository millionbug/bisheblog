function Mysql(target){
    this.target = target;
    this.mysql = require("mysql");
    this.Q = require("q");
}
Mysql.prototype = {
    constructor:Mysql,
    client:null,
    resultData:null,
    clientConnect:function(){
        this.client = this.mysql.createConnection({
            user:"root",
            password:"asd"
        });
        this.client.connect();
    },
    connectMysql:function(target){
        var def = this.Q.defer();
        this.client.query("use blog",function(err,results){
            if(err){
                def.reject(err);
            }else{
                def.resolve(target);
            }
        });
        return def.promise;
    },
    queryData:function(target){
        var def = this.Q.defer();
        this.client.query(target.query,target.param,function(err,results,field){
            if(err){
                def.reject(err);
            }else{
                def.resolve(results,field);
            }
        });
        return def.promise;
    },
    Query:function(){
        this.clientConnect();
        var me = this;
        this.connectMysql(this.target).
        then(function(query){
            return me.queryData(query);
        }).done(function(resules,field){
            if(!resules)
                return;

            var rows = {
                total:resules.length,
                result:[]
            };

            var config = me.target.config;
            for(var i = 0;i<resules.length;i++){
                rows.result[i] = {};
                config.forEach(function(item){
                    rows.result[i][item] = resules[i][item];
                })
            }
            me.client.end();
            me.target.response.json(rows);
        },console.error);

    },
    Update:function(){
        this.clientConnect();
        var me = this;

        this.connectMysql(this.target).
        then(function(target){
            return me.queryData(target);
        }).done(function(results,field){
            me.client.end();
            me.target.response.send("1");
        },console.error)
    },
    Add: function () {
        this.clientConnect();
        var me = this;

        this.connectMysql(this.target).
        then(function (target) {
           return me.queryData(target);
        }).done(function (results) {
            me.target.response.send("1");
        },console.error);
    },
    Delete:function(){
        this.clientConnect();
        var me = this;

        this.connectMysql(this.target).
        then(function (target) {
            return me.queryData(target);
        }).done(function (results) {
            me.target.response.send("2");
        },console.error);
    }
};
exports.createMysql = Mysql;