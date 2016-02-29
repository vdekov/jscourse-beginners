// function () { ... }
console.log(
   ( function () {
      return 'hello, functions!';
   } )
);

// "hello, functions!"
console.log(
   ( function () {
      return 'hello, functions!';
   } )()
);