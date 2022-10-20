let aCat = { name: '香菜', gender: undefined };
console.log(Reflect.ownKeys(aCat))

// 1.使用[]或者.
console.log(1, aCat.name); // 香菜
console.log(2, aCat.gender); // undefined
console.log(3, aCat.age); // undefined
console.log(4, aCat['toString']); // [Function: toString]
console.log('-------------');

// 2.使用in
console.log(5, 'name' in aCat); // true
console.log(6, 'gender' in aCat); // true
console.log(7, 'age' in aCat); // false
console.log(8, 'toString' in aCat); // true
console.log('-------------');

// 3.使用hasOwnProperty()
console.log(9, aCat.hasOwnProperty('name')); // true
console.log(10, aCat.hasOwnProperty('gender')); // true
console.log(11, aCat.hasOwnProperty('age')); // false
console.log(12, aCat.hasOwnProperty('toString')); // false
console.log('-------------');

// 4.使用Object.prototype.hasOwnProperty.call(). 
console.log(13, Object.prototype.hasOwnProperty.call(aCat,'name')); // true
console.log(14, Object.prototype.hasOwnProperty.call(aCat,'gender')); // true
console.log(15, Object.prototype.hasOwnProperty.call(aCat,'age')); // false
console.log(16, Object.prototype.hasOwnProperty.call(aCat,'toString')); // false
console.log('-------------');

// 5.使用Reflect.has().
console.log(17, Reflect.has(aCat,'name')); // true
console.log(18, Reflect.has(aCat,'gender')); // true
console.log(19, Reflect.has(aCat,'age')); // false
console.log(20, Reflect.has(aCat,'toString')); // true
console.log('-------------');


let bCat = { name: '香菜'};
let cCat = { name: '香菜', toString: '哈哈', hasOwnProperty:'嗯嗯' };
console.log(Reflect.has(bCat,'toString')); // true
console.log(Reflect.has(cCat,'toString')); // true
console.log(Reflect.has(bCat,'hasOwnProperty')); // true
console.log(Reflect.has(cCat,'hasOwnProperty')); // true
console.log(Object.prototype.hasOwnProperty.call(bCat,'toString')); // false
console.log(Object.prototype.hasOwnProperty.call(cCat,'toString')); // true
console.log(Object.prototype.hasOwnProperty.call(bCat,'hasOwnProperty')); // false
console.log(Object.prototype.hasOwnProperty.call(cCat,'hasOwnProperty')); // true

/**  
1、[]或者.这个方法是通过undefined去确定的，他的缺点是无法判断值为undefined的属性是否存在
2、Reflect 与 in 本质上是一样的，但是它们不仅能判断对象属性存在，对象原型链上的属性也会被认定为true。
    意思是我非要给对象加上一个属性“toString”或者“hasOwnProperty”，它没法区分两者。
3、hasOwnProperty获取的就是确确实实的只属于自身的属性，但是有两个问题，问题一，如上一条，hasOwnProperty理论上可以被覆盖。
    问题二，使用var myObject = Object.create(null)创建空对象，此时myObject并没有继承Object这个原型的任何方法，也用不了hasOwnProperty
4、Object.prototype.hasOwnProperty.call()与正常情况下的hasOwnProperty没有任何区别，是一种更为严谨的写法，确认调用的是原型链上的属性方法。
总结：我的日常开发中想要判断的一般都是自身的某个属性是否存在，理论上Object.prototype.hasOwnProperty.call()就是最为严谨的方法。
    但是实际开发中，因为原型链顶端的Object带有的实例方法是有限的，一般也不会重名，所以用in、Reflect.has、hasOwnProperty都可以
*/