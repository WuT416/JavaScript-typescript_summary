const heapdump = require('heapdump');

var path = require("path");
var startMemory = path.join(__dirname, "/file/start-circle-wrong.heapsnapshot")
var endMemory = path.join(__dirname, "/file/end-circle-wrong.heapsnapshot")

heapdump.writeSnapshot(startMemory)
 // 记录应用开始时的内存dump
let foo = null;
function outer() {
    let bar = foo;
    function unused() { // 未使用到的函数
        console.log(`bar is ${bar}`);
    }

    foo = { // 给foo变量重新赋值
        bigData: new Array(100000).join("this_is_a_big_data"), // 如果这个对象携带的数据非常大，将会造成非常大的内存泄漏
        inner: function() {
            console.log(`inner method run`);
        }
    }
}
for(let i = 0; i < 1000; i++) {
    outer();
}
global.gc();
heapdump.writeSnapshot(endMemory); // 记录应用结束时的内存dump

console.log('结束-wrong')