// 创建数组
var fruits = ['Apple','Banana'];
console.log(fruits.length);
// 通过索引访问数组元素
console.log(fruits[0]);
console.log(fruits.length - 1);
// 遍历数组
fruits.forEach(function(item, index, array){
    console.log(item, index);
});
// 添加元素到数组的末尾，注意一下输出结果
console.log(fruits.push('Orange')); 
console.log(fruits);
// 删除数组末尾的元素
console.log(fruits.pop());
console.log(fruits);
// 删除数组最前面（头部）的元素
console.log(fruits.shift());
console.log(fruits);
// 添加元素到数组的头部
console.log(fruits.unshift('Strawberry'));
console.log(fruits);
// 找出某个元素在数组中的索引
console.log(fruits.indexOf('Strawberry'));
console.log(fruits);
// 通过索引删除某个元素
console.log(fruits.splice(1,1));
console.log(fruits);
// 从一个索引位置删除多个元素
var vegetables = ['Cabbage','Turnip','Radish','Carrot'];
console.log(vegetables);
var pos = 1, n = 2;
var removedItems = vegetables.splice(pos, n);
console.log(vegetables);
console.log(removedItems);
// 复制一个数组
var shallowCopy = fruits.slice();
console.log(shallowCopy);