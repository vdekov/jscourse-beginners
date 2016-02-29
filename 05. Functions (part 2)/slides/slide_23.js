var global = 1;

function root() {
   // `global` is available here
   // `private` is local variable for this function
   // and is not available outside this function
   var private = 2;
   // `global_2` is available here and in the global
   // space as it is not declared as local variable
   global_2    = 2;
   
   function inner() {
      // `global`, `global_2` and `private` are available
      // `private_inner` won't be available outside `inner()`
      var private_inner = 3;
   }
}

root();
// `private` and `private_inner` are undefined
// in the global scope
console.log( global, global_2 );               // 1, 2