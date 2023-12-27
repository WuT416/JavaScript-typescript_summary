// 属性装饰器
// 参数1：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 参数2：成员的名字。
function enhancer1(target: any, propertyKey: string) {
  console.log(target); // Person {}
  console.log("key " + propertyKey); // key name
}
class Person {
  @enhancer1
  job: string;
  constructor() {
    this.job = "doctor";
  }
}
