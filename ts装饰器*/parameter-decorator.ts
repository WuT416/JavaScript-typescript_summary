// 参数装饰器
// 参数装饰器用于修饰类方法的参数，接收 3 个参数：
// 参数1：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 参数2：成员的名字。
// 参数3：参数在函数参数列表中的索引。

function enhancer(target: any, propertyKey: string, parameterIndex: number) {
  console.log(target); // Person { getName: [Function] }
  console.log("key " + propertyKey); // key getName
  console.log("index " + parameterIndex); // index 0
}
class PPerson {
  job: string;
  constructor() {
    this.job = "teacher";
  }
  getName(@enhancer name: string, @enhancer age: string) {
    return name + age;
  }
}
