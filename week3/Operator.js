var apple = 15;
var pear = 20;
var fruit = apple + pear;
// alert(fruit);
console.log(fruit);

console.log('0' === 0);
console.log('0' == 0);

var x = 5;
x++;
console.log(x);
x += 2;
console.log(x);

var y = 10;
var z = 10;
console.log(y > x);
console.log(y >= x);



// 保留两位小数且四舍五入
var num = 2.44624;
num = num.toFixed(2);
console.log(num);
// 保留两位小数且不四舍五入，容易出现精度问题
var num = 2.44624;
num = Math.floor(num * 100) / 100
console.log(num);

// 返回四舍五入后的整数.
console.log(Math.round(.95));

// 返回x向上取整后的值.
console.log(Math.ceil(.95));
// 返回小于x的最大整数。
console.log(Math.floor(.95));

console.log('hello' && 88);
console.log(null && 66);
console.log('' || 88);
console.log(undefined || true);
console.log(!'');
console.log(!8866);
// 运算符	        语法	        说明
// 逻辑与，AND（&&）expr1 && expr2	若 expr1 可转换为 true，则返回 expr2；否则，返回 expr1。
// 逻辑或，OR（||）	expr1 || expr2	若 expr1 可转换为 true，则返回 expr1；否则，返回 expr2。
// 逻辑非，NOT（!）	!expr	        若 expr 可转换为 true，则返回 false；否则，返回 true。

function A(){ console.log('called A'); return false; }
function B(){ console.log('called B'); return true; }

console.log( A() && B() );
// logs "called A" due to the function call,
// then logs false (which is the resulting value of the operator)

console.log( B() || A() );
// logs "called B" due to the function call,
// then logs true (which is the resulting value of the operator)