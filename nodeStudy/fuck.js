//process 全局对象中包括
//stdout（standard output）
process.stdout.write("this is stdout ");   //console.log()

//stderr (standard error)
process.stderr.write("this is stderr ");   //console.error()
console.error("fuck shis");

//stdin (standard input)
process.stdin.setEncoding("utf-8");     // 预先设置编码

process.stdin.on("data",function(data){
    console.log(data);
});
//输入文件所在绝对路径
console.log(__dirname);
//输入执行命令所在的路径
console.log(process.cwd());

//监听程序退出
process.on("exit",function(){
   console.log("I will exit");
});
//封装了在命令行中输入的内容为一个数组
console.log(process.argv);
