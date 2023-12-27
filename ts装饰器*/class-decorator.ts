// 类装饰器
// 类的构造函数作为其唯一的参数。可以对类进行修改，覆盖、添加或者删除类里面的属性及方法

// 1.输出参数
function decorator(...args: any[]) {
  console.log(args);
}

@decorator
class Animal {
  name = "cat";
}
// 2.覆盖、添加类属性
function decorator1(target: any) {
  target.say = function () {
    console.log("hello!");
  };
  target.run = function () {
    console.log("I am running.");
  };
}

@decorator1
class Animal1 {
  static say: Function;
  constructor() {}
}

Animal1.say(); // hello!
// @ts-ignore
Animal1.run(); // I am running.


// 3.如果装饰器有返回会怎样
function decorator2(target: any) {
  return "hello world";
}
// @ts-ignore
@decorator2
class Animal2 {
  static say: Function;
  constructor() {}
}

console.log("Animal2:", Animal2);
