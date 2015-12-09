//javaScript 语言自身只有字符串数据类型，没有二进制数据类型。
//但在处理像TCP流或文件流时，必须使用到二进制数据。
// 因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
//在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。
// Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，
// 每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。

var buf1 = new Buffer(7);        //创建长度为10的buffer实例
var buf2 = new Buffer([10,20,30]);    //使用数组创建buffer
var buf3 = new Buffer("www.baidu.com");
console.log(buf3.toString());

buf1.write("aasdfaf");  //使用write写入缓存区
console.log(buf1.toString());

//使用concat连接2个buffer
var buf4 = Buffer.concat([buf1,buf3]);
console.log(buf4.toString());

//use "copy" copy buffer
//use "slice" 截取buffer
var buffer1 = buf3.slice(0,4);
console.log(buffer1.toString())