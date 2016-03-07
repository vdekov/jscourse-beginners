function sum () {
   var sum = 0;
   var args = [].slice.call( arguments );
   
   args.forEach( function ( arg ) {
      sum += arg;
   });
   
   return sum;
}

var sum_bound = sum.bind( null, 5, 6 );
console.log( sum_bound(), sum_bound( 7 ) );  // ???