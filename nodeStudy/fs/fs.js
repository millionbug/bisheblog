var fs = require("fs"),
    path = require("path");
fs.readFile("process.js","utf-8",function(err,data){
    if(err){
        console.log(err);
    }else{
    //    console.log(data);  //没有utf8 以2进制输入
    //    console.log(data.toString());   //参数没有utf8的时候
    //    console.log(data)
    }
});

var data = fs.readFileSync("process.js","utf-8"); //同步读取
//console.log(data)

//renames
//fs.renameSync("fuck.js","process.js")  //param1:old name,param2:new name

//writeFile
fs.writeFileSync("fuck.js",fs.readFileSync("process.js"));

//指定目录下所有文件名称，可用forEach遍历。
//fs.readdirSync(path).forEach(function(item){});
function travel(dir,callback){
    fs.readdirSync(dir).forEach(function(file){
        var pathname = path.join(dir,file);

        if(fs.statSync(pathname).isDirectory()){
            travel(pathname,callback);
        }else{
            callback(pathname);
        }
    });
}
travel("/home/miller/yangHao",function(pathname){
 //  console.log(pathname)
});
