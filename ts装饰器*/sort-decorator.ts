// 装饰器排序
function staticParamsDecorator(target: any, name: any, index: any) {
  console.log("static params decorator");
}
function staticFuncDecorator(target: any, name: any, descriptor: any) {
  console.log("static func decorator");
}
function staticPropertyDecorator(target: any, name: any) {
  console.log("static property decorator");
}
function instanceParamsDecorator(target: any, name: any, index: any) {
  console.log("instance params decorator");
}
function instanceFuncDecorator(target: any, name: any, descriptor: any) {
  console.log("instance func decorator");
}
function instanceAccessorDecorator(target: any, name: any, descriptor: any) {
  console.log("instance accessor access");
}
function instancePropertyDecorator(target: any, name: any) {
  console.log("instance property decorator");
}
function constructorParamsDecorator(target: any, name: any, index: any) {
  console.log("constructor params decorator");
}
function classDecorator1(target: any) {
  console.log("class decorator1");
}
function classDecorator2(target: any) {
  console.log("class decorator2");
}

@classDecorator1
@classDecorator2
class Cat {
  constructor(@constructorParamsDecorator options: any) {}

  @staticPropertyDecorator
  static color = "orange";

  @staticFuncDecorator
  static Say(@staticParamsDecorator name: string) {}

  @instanceAccessorDecorator
  get age1() {
    return this.age;
  }

  @instanceFuncDecorator
  run(@instanceParamsDecorator time: number) {}

  @instancePropertyDecorator
  age = 11;
}

// instance accessor access
// instance params decorator
// instance func decorator
// instance property decorator
// static property decorator
// static params decorator
// static func decorator
// constructor params decorator
// class decorator2
// class decorator1
