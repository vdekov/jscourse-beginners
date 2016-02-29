var myvar = 'global';

(function () {
   // local `myvar` is hoisted here with undefined value
   console.log( myvar );      // undefined
   var myvar = 'local';
   console.log( myvar );      // local
})();