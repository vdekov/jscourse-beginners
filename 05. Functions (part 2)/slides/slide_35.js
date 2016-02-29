var myvar = 'global';

(function () {
   console.log( myvar );      // undefined
   var myvar = 'local';
   console.log( myvar );      // local
})();