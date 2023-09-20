const heapdump = require("heapdump");

var path = require("path");
var startMemory = path.join(__dirname, "/file/start-wrong.heapsnapshot");
var endMemory = path.join(__dirname, "/file/end-wrong.heapsnapshot");

heapdump.writeSnapshot(startMemory); // 记录应用开始时的内存dump

var replaceThing = function () {
  //为了方便观察内存情况（正常情况下一般是不会有这么长的数组的），new一个有一亿项元素的数组，这样数组本身会占用很大的内存
  var originalThing = new Array(100000).join("this_is_a_big_data");
  var outer = "outer str";
  console.log("new...");
  return function () {
    if (originalThing) console.log(outer);
  };
};
//得到闭包函数
var closureFn = replaceThing();
//执行
closureFn();
global.gc();
heapdump.writeSnapshot(endMemory); // 记录应用结束时的内存dump
console.log("结束-wrong");
