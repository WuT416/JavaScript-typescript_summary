// 装饰器工厂
function giveSay(name: string) {
  return function (target: any) {
    target.say = function () {
      console.log("hello! My name is " + name);
    };
  };
}

@giveSay("Lily")
class PersonA {
  static say: Function;
  constructor() {}
}

PersonA.say(); // hello! My name is Lily

@giveSay("Luke")
class PersonB {
  static say: Function;
  constructor() {}
}

PersonB.say(); // hello! My name is Luke
