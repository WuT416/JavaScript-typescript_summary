import { flow } from "lodash-es";
//加法运算
var add = function (x) {
  return x + 1;
};
//乘法运算
var mul = function (x) {
  return x * 5;
};
console.log(flow(mul, add)(2));
console.log(flow(add, mul)(2));

const flow1 = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        g(f(...args))
  );
console.log(flow1(mul, add)(2));
