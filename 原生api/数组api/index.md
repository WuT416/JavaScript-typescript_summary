不熟悉

静态方法
```
Array.of()
```
创建一个新的 Array 实例，具有可变数量的参数，而不管参数的数量或类型。

实例方法
```
at(index)
```
接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。正数与array[0]没差，但是负数array[array.length - 1]可以简化为array.at(-1)。
思考：这么方便的东西我平常居然都没用过，接着我在我本地运行了一下，报错了。这个方法在2021年8月才刚刚签署并纳入官方规范。仅支持Chrome >= 92 或 nodeJs >= 16.6，我的node版本低了，这么看没用过也正常。

```
copyWithin(target, start, end)
```
浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。包括start不包括end。
```
entries()
```
返回一个新的数组迭代器对象，该对象包含数组中每个索引的键/值对。Array Iterator是对象，它的原型（__proto__:Array Iterator）上有一个 next 方法，可用用于遍历迭代器取得原数组的 [key,value]。
```
fill(value, start, end)
```
用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
```
flat(depth)
```
按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。depth指定要提取嵌套数组的结构深度，默认值为 1。flat() 方法会移除数组中的空项。使用 Infinity，可展开任意深度的嵌套数组
```
flatMap((currentValue, index, array) => { /* … */ } )
```
使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为 1 的 flat 几乎相同

熟悉

静态方法
```
Array.from()
Array.isArray()
```
实例方法
```
concat(value0, value1, /* … ,*/ valueN)
every((element, index, array) => { /* … */ } )
filter((element, index, array) => { /* … */ } )
find((element, index, array) => { /* … */ } )
findLast((element, index, array) => { /* … */ } )
findLastIndex((element, index, array) => { /* … */ } )
findIndex((element, index, array) => { /* … */ } 
forEach((element, index, array) => { /* … */ })
includes(searchElement, fromIndex)
indexOf(searchElement, fromIndex)
join(separator)
keys()
lastIndexOf(searchElement, fromIndex)
map((element, index, array) => { /* … */ })
pop()
push()
reduce()
reduceRight()
reverse()
shift()
slice()
some()
sort()
splice()
toLocaleString()
toString()
unshift()
values()
```