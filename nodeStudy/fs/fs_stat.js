//stat 获取文件信息 常用有isFile()  isDirectory()

var fs = require("fs");

fs.stat("../fs",function(err,stat){
    if(err){
        return
    }
    console.log(stat.isFile());
    console.log(stat.isDirectory());
});
