// 第一题 
// 本题参考https://segmentfault.com/a/1190000006150186

// 用instanceof进行判断
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
console.log(a instanceof Array);
console.log(b instanceof Array);

// 用Array对象的isArray方法判断
// 最靠谱的方法
var g = [];
var h = {};
console.log(Array.isArray(g));
console.log(Array.isArray(h));




// 第二题
var a = [1,2,3,4,5];
// pass a function to map
const map1 = a.map(x => x*2);

console.log(map1);


// 第三题
var colors = ['Red','Green','White','Black'];
console.log(colors.join(' '));
console.log(colors.join('+'));
console.log(colors.join(','));

// 第四题
var a = [5,1,8,10,4];
a.sort(function(c,d){
    return c - d;
});
console.log(a);

x=0;
console.log(2 * x ** 2);


// 第五题
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 2];

// 方法一：利用键值对储存
// 1.定义一个对象，在遍历数组的时候，将数组元素作为对象的键，将出现在的次数作为值
// 2.获取键值对后进行遍历，获取值最大的那个元素，返回后即可得到结果
function findMost(a){
    if (!a.length) return;
    if (a.length == 1) return 1;
    var res = {};
    // 遍历数组
    for (var i = 0, l = a.length; i < l; i++){
        if (!res[a[i]]){
            res[a[i]] = 1;
        }
        else {
            res[a[i]]++;
        }
    }
    // 遍历res
    var keys = Object.keys(res);
    var maxNum = 0, maxEle;
    for (var i = 0, l = keys.length; i < l; i++){
        if (res[keys[i]] > maxNum){
            maxNum = res[keys[i]];
            maxEle = keys[i];
        }
    }
    return '出现次数最多的元素为：' + maxEle + '，出现次数为：' + maxNum;
}


// 方法二
// 是对方法一的优化，将方法一中的两次便利缩减为一次遍历，将值的判断放在同一个遍历当中
function findMost2(a){

    var h = {};
    var maxNum=0;
    var maxEle = null;
    for (var i = 0; i < a.length; i++){
        var a = a[i];
        h[a] === underfined ? h[a] = 1 : (h[a]++);
        // 同一个循环中执行判断
        if (h[a] > maxNum){
            maxEle = a;
            maxNum = h[a];
        }
    }
    return '出现次数最多的元素为：' + maxEle + '，出现次数为：' + maxNum;
}

// 方法三
// 借助数组Array的reduce方法
// arr.reduce([callback, initialValue])
function findMost3(a){
    var maxEle;
    var maxNum = 1;
    var obj = a.reduce(function (p,k){
        p[k] ? p[k]++ : p[k] = 1;

        if (p[k] > maxNum) {
            maxEle = k;
            maxNum++;
        }
        return p;
    },{});
    return '出现次数最多的元素为：' + maxEle + '，出现次数为：' + maxNum;
}

// 方法四
// 借助于字符串的replace方法，适用于字符数组的运算
// 首先将数组转化为字符串，然后通过字符串的replace方法，接受处理函数
function findMost4(a){
    var obj = {};
    var maxEle;
    var maxNum = 1;
    a.join('').replace(/(\w)/g, function(word, p){
        obj[p[0]] ? obj[p[0]] += 1 : obj[p[0]] = 1;
        if (obj[p[0]] > maxNum) {
            maxEle = p[0]
            maxNum++;
        }
    });
    return '出现次数最多的元素为：' + maxEle + '，出现次数为：' + maxNum;
}

console.log(findMost4(a));

// 方法五
// 利用ES6语法及逗号运算符进行的代码优化
Array.prototype.getMost = function(){
    var obj = this.reduce((p,n) => (p[n]++ || (p[n] = 1),
                (p .max = p.max >= p[n] ? p.max : p[n]),
                (p.key = p.max > p[n] ? p.key : n), p), {});
    return '出现次数最多的元素为：' + maxEle + '，出现次数为：' + maxNum;
}