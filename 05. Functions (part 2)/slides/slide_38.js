var myvar = 'global';

(function () {
   myvar = 'local';
   var myvar;
   console.log( myvar );      // local
})();

console.log( myvar );         // global