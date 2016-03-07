function createMultiplier( multiplier ) {
   return function ( num ) {
      return num * multiplier;
   };
}

var multiply10 = createMultiplier( 10 );
multiply10( 5 );             // 50

var multiply = createMultiplier( 20 );
multiply( 5 );               // 100