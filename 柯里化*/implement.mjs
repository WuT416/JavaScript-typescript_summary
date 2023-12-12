// fn是传入curry中待处理函数
function curry(fn) {
  return function curried(...args1) {
    // 声明一个函数用于接收参数,并在后期完成参数拼接
    console.log("args1", args1);
    if (args1.length < fn.length) {
      // 如果所传参数个数小于所需参数
      return function (...args2) {
        // 返回一个函数接收剩余参数
        console.log("args2", args2);
        return curried(...args1, ...args2); // 将接收过来的参数进行拼接并返回该函数
      };
    }
    return fn(...args1); // 否则直接返回并调用该函数
  };
}

function getSum(a, b, c, d) {
  return a + b + c + d;
}

const curried = curry(getSum);
console.log(curried(1, 2, 3, 4));
console.log(curried(1)(2, 3, 4));
console.log(curried(1)(2)(3)(4));
