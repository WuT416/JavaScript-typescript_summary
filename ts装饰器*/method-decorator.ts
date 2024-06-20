// 方法装饰器
// 参数1：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 参数2：成员的名字。
// 参数3：成员的属性描述符
class MGreeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  // @ts-ignore
  @enumerable(true)
  static greet() {
    return "Hello,";
  }
}

function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(target, propertyKey, descriptor);
    descriptor.writable = false;
    return ()=>{};
  };
}

console.log(Object.getOwnPropertyDescriptor(MGreeter, "greet"));

console.log(MGreeter.greet)