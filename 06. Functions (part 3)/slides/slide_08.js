// create a function `sum` that sums 2 numbers
var sum = new Function(
   'a', 'b', 'return a + b'
);

console.log( sum( 1, 2 ) );      // 3

function sum2 ( a, b ) {
   return a + b;
}

var sum3 = function ( a, b ) {
   return a + b;
}