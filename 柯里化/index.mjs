import { curry } from "lodash-es";
//普通函数
function fn(a, b, c, d, e) {
  console.log(a, b, c, d, e);
}
//生成的柯里化函数
let _fn = curry(fn);

_fn(1, 2, 3, 4, 5); // print: 1,2,3,4,5
_fn(1)(2)(3, 4, 5); // print: 1,2,3,4,5
_fn(1, 2)(3, 4)(5); // print: 1,2,3,4,5
_fn(1)(2)(3)(4)(5); // print: 1,2,3,4,5

console.log('-----------------');

// 数学和计算科学中的柯里化：
//一个接收三个参数的普通函数
function sum(a,b,c) {
  console.log(a+b+c)
}
//获取一个柯里化后的函数
let _sum = curry(sum);
//返回一个接收第二个参数的函数
let A = _sum(1);
//返回一个接收第三个参数的函数
let B = A(2);
//接收到最后一个参数，将之前所有的参数应用到原函数中，并运行
B(3)    // print : 6
