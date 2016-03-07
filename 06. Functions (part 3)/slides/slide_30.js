function foo () {
   // create an array from `arguments`
   var args = [];
   for ( var i = 0; i < arguments.length; i++ ) {
      args[ i ] = arguments[ i ];
   }
   
   args.forEach( function ( arg ) {
      console.log( 'Argument: ', arg );
   });
}

foo( 1, 2, 3 ); // Argument: 1, Argument: 2, Argument: 3