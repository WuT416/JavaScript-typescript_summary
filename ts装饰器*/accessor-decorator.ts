// 访问器装饰器
// 参数1：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 参数2：成员的名字。
// 参数3：成员的属性描述符
class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    // @configurable(false)
    // set x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}

function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    };
}