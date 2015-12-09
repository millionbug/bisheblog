//可以使用pipe（管道）连接输入输出流
var fs = require("fs");

var readStream = fs.createReadStream("mysql/mysql.js");
var writeStream = fs.createWriteStream("text/fuck2.js");

readStream.pipe(writeStream);