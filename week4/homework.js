
// 第一题
// 编写一个函数，实现以下功能：将一个字符串逆序输出。
// 方法一：：利用Array对象的reverse()方法，用于颠倒数组中元素的顺序。
// var  str1 = "abcdefg";
// var result1 = str1.split("").reverse().join("");
// console.log(result1); //gfedcba
function reverseString1(message1){
    console.log(message1.split('').reverse().join(''));
}
reverseString1('hello'); // should return 'olleh'

/*方法二：*/
// var  str2 = "abcdefg";
// for(var i = str2.length - 1; i >= 0; i--){
//     console.log(str2.charAt(i));
//     //结果：逆序输出abcdefg，但是每行只输出一个字符
// }
function reverseString2(message2){
  for(var i = message2.length - 1; i >= 0; i--){
    console.log(message2.charAt(i));
  }
}
reverseString2('hello');

/*方法三：调用一个单独的函数实现*/
// function Reverse(str) {
//   var len = str.length;
//   var result = "";
//   if(len == 0){
//       return null;
//   }
//   while( --len >= 0 ){
//       result += str.charAt(len);
//   }
//   return result; //gfedcba
// }
// var  str3 = "abcdefg";
// var result3 = Reverse(str3);
// console.log(result3); 
function reverseString3(message3){
  var len = message3.length;
  var result = "";
  if(len == 0){
    console.log(null);
  }
  while( --len >= 0){
    result += message3.charAt(len);
  }
  console.log(result);
}
reverseString3('hello');


// 方法四：利用call():调用一个对象的一个方法，以另一个对象替换当前对象。
// var  str4 = "abcdefg";
// var result4 = Array.prototype.slice.call(str4).reverse().join("");
// console.log(result4); //gfedcba
function reverseString4(message4){
  var result4 = Array.prototype.slice.call(message4).reverse().join("");
  console.log(result4);
}
reverseString4("hello");




// 第二题
// 编写一个函数，实现以下功能：判断一个字符串是否是回文串。（回文，一个字符串从前面读和从后面读都一样，例如：abcba就是回文串。）
function reverseString3(message){
  var len = message.length;
  var result = "";
  if(len == 0){
    console.log(null);
  }
  while( --len >= 0){
    result += message.charAt(len);
  }
  console.log(result);
}
reverseString3('hello');
function palindrome(message){
  
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true

// 第三题
// 编写一个函数，实现以下功能：按字母表顺序输出传入的参数字符串。
function alphabetSort(message){
  // wirte your code here
}
alphabetSort('hello'); // should return 'ehllo'


// 第四题
// 编写一个函数，实现以下功能：计算出一个字符串共有多少个单词组成。
function countWords(message){
  // wirte your code here
}
countWords('Good morning, I love JavaScript.'); // should return 5