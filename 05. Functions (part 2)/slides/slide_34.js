var myvar = 'global';

(function () {
   console.log( myvar );      // global
   myvar = 'local';
   console.log( myvar );      // local
})();