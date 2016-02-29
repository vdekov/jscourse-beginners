console.log( typeof myFn );      // "function" 
function myFn() {
   return '';
}

console.log( typeof myAnonFn );  // "undefined"
var myAnonFn = function () {
   return '';
}
console.log( typeof myAnonFn );  // "function"