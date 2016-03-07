function sum ( a, b ) {
   return a + b;
}

var sum_bound      = sum.bind( null );
var sum_bound_args = sum.bind( null, 1, 2 );

console.log( sum_bound( 1, 2 ), sum_bound_args() );

// sum_bound.length          -> 2
// sum_bound_args.length     -> 0