// TASK 1
var array = [ 5, 78, 34, 1, 54, 99, 7, 22, 11, 47, 83, 67 ];

var sum = 0;
for ( var i = 0; i < array.length; i++ ) {
   sum += array[ i ];
}
var result = sum / array.length;

console.log( result.toFixed(2) );

// TASK 1 v.2
var array = [ 5, 78, 34, 1, 54, 99, 7, 22, 11, 47, 83, 67 ];

for ( var i=0, sum=0; i < array.length; sum += array[i++] );
console.log( sum / array.length );

// TASK 2
var array = [ 5, 78, 34, 1, 54, 99, 7, 22, 11, 47, 83, 67 ];

for ( var i = 0; i < array.length; i++ ) {
   if ( array[ i ] > array[ i + 1 ] ) {
      var temp = array[ i ];
      array[ i ] = array[ i + 1 ];
      array[ i + 1 ] = temp;
      i -= 2;
   }
}

console.log(array);

var array = [ 5, 78, 34, 1, 54, 99, 7, 22, 11, 47, 83, 67 ];

for ( var i = 0; i < array.length - 1; i++ ) {
   for ( var j = i + 1; j < array.length ; j++ ) {
      if ( array[ i ] > array[ j ] ) {
         var temp = array[ i ];
         array[ i ] = array[ j ];
         array[ j ] = temp;
      }
   }
}

console.log( array );

// TASK 3

var fibo = [ 0, 1 ];

while ( true ) {
   var cur = fibo[ fibo.length - 1 ] + fibo[ fibo.length - 2 ];
   
   if ( cur > 100 ) {
      break;
   }
   
   fibo.push( cur );
   
   if ( cur % 3 == 0 ) {
      console.log( cur );
   }
}