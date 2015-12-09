//events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。
//一般作为父类被原型继承，fs，http，stream都可以使用on监听事件。
var eventEmitter = require("events").EventEmitter;
var event = new eventEmitter();

event.on("fuck",function(){
   console.log("fuck this1");
});

setTimeout(function(){
   event.emit("fuck");
},2000);

//可以同时监听多个事件监听器

event.addListener("fuck",function(){
   console.log("fuck this2");
});

