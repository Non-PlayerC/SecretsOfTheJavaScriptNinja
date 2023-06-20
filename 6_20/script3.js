//! 函数调用
function ninja() {
    return this;
}
function samurai() {
    "use strict";
    return this;
}
// console.log(ninja() === window ? "YES" : "no");
// console.log(samurai() === undefined ? "YES" : "no");


//! 作为方法被调用
function whatMyContent() {
    return this;
}
// console.log(whatMyContent === window ? "YES" : "NO");

var getMyThis = whatMyContent;
// console.log(getMyThis() === window ? "YES" : "NO");

var ninja = {
    getMyThis: whatMyContent
}
console.log(ninja.getMyThis() === ninja ? "YES" : "NO");// 函数的上下文是 ninja
console.log(ninja.getMyThis().construction === whatMyContent ? "YES" : "NO");// 函数的上下文是 ninja