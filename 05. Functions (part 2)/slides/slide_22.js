// global variables are accessible everywhere
var global_variable = 1;

for ( var i = 0; i < 5; i += 1 ) {
   // `global_variable` is available here
   // `i` is also accessible outside this `for` loop
   if ( i == 3 ) {
      // `global_variable` is available here
      // `i` is available here
      // `c` is also accessible outside this `if` statement
      // and the `for` loop
      c = 1;
   }
}
console.log( global_variable, i, c );          // 1, 5, 1

