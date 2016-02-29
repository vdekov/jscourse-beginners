// We create anonymous function to create encapsulation,
// protect private variable `number` & execute it
(function () {
   // this variable is invisible outside this function
   var number     = 5;
   // create global `number` getter & setter functions
   window.getNum  = function () {
      return number;       // closure - `number` comes from parent fn
   };
   window.setNum  = function ( num ) {
      number      = num;   // closure
   };
})();

number = 0;                            // global variable
console.log( getNum() );               // 5
setNum( 2 );
console.log( getNum(), number );       // 2, 0