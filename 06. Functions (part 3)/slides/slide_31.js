var my_array = [
   "One", "Two", "Three", "Four", "Five",
   "Six", "Seven", "Eight", "Nine" ];

var new_array = my_array.slice( 1, 3 );
console.log( new_array );           // "Two", "Three"
var copy_array = my_array.slice();
console.log( copy_array );          // ???