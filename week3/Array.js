var fruits = new Array(10);
var fruit = ['apple','pear','peach'];
var names = [];
var values = [1,2];

console.log(fruit[0]);
fruit[1] = 'grape';
console.log(fruit[1]);
fruit[3] = 'banana';
console.log(fruit[3]);
console.log(fruit);
// 长度
console.log(fruit.length);
console.log(names.length);
// 末尾增加
fruit.length = 2;
console.log(fruit[2]);
fruit.push('banana');
console.log(fruit);
// 末尾移除
fruit.pop();
console.log(fruit);
// 开头移除
fruit.unshift('banana');
console.log(fruit);
// 开头增加
fruit.shift();
console.log(fruit);
// 找到索引值
console.log(fruit.indexOf('apple'));
// 反转顺序
console.log(fruit.reverse());
// 升序排列
console.log(fruit.sort());
// 化成“字符串”连在一起
console.log(fruit.join('-'));
