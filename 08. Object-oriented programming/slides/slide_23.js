var arr = [];                             // new Array
arr.forEach === Array.prototype.forEach;  // true
arr.shift   === Array.prototype.shift;    // true

// overwrite inherited method
arr.push    = function () {};
arr.push    === Array.prototype.push;     //false
var newarr  = new Array();
newarr.push === Array.prototype.push;     // true