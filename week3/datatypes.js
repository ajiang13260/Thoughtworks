var a = 95;
var b = 'name';
var c = function () { return 'Hello World'; };
var d = 10 / +0;
var g = 10 / -0;
var l = 10 / 'a';
var e = null;
var f = undefined;
alert(typeof null);    // 返回 object  
function demo() {
  alert('demo');
}
alert(typeof demo);     // 返回  function  


function Cat() {
}
Cat.prototype.CatchMouse = function () {
  //do some thing 
}
// 获取变量 obj 的数据类型 function getType(obj) 
{
  return (obj === null) ? "null" : typeof (obj);
}
  var obj = new Object();
    alert(getType(obj)); //object 
  var func = new Function();
    alert(getType(func)); //function 
  var str = new String("jeff wong");
    alert(getType(str)); //object 
  var num = new Number(10);
    alert(getType(num)); //object 
  var time = new Date();
    alert(getType(time)); //object 
  var arr = new Array();
    alert(getType(arr)); //object 
  var reg = new RegExp();
    alert(getType(reg)); //object 
  var garfield = new Cat();
    alert(getType(garfield)); //object 
