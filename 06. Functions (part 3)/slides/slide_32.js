function foo () {
   // create an array from `arguments`
   var args = [].slice.call( arguments );
   
   args.forEach( function ( arg ) {
      console.log( 'Argument: ', arg );
   });
}

foo( 1, 2, 3 ); // Argument: 1, Argument: 2, Argument: 3