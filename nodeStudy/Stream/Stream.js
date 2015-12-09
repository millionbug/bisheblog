//Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。
/**Stream 有四种流类型：
 * Readable - 可读操作。
 * Writable - 可写操作。
 * Duplex - 可读可写操作.
 * Transform - 操作被写入数据，然后读出结果。*/
/**
 * 所有的 Stream 对象都是 EventEmitter 的实例。
 * data - 当有数据可读时触发。
 * end - 没有更多的数据可读时触发。
 * error - 在接收和写入过程中发生错误时触发。
 * finish - 所有数据已被写入到底层系统时触发。
 */

var fs = require("fs");
var data = "";

var readStream = fs.createReadStream("json.js");
var writeStream = fs.createWriteStream("fuck.js");

readStream.setEncoding("utf8");

readStream.on("data",function(chunk){
   data +=  chunk;
});
readStream.on("end",function(){
    writeStream.write(data,"utf8");
    writeStream.end();
});

readStream.on("err",function(err){
    console.log("err:"+err);
});
writeStream.on("finish",function(){
    console.log("write is over");
});

writeStream.on("err",function(err){
    console.log(err);
});

//以上可以用pipe代替

