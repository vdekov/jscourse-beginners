Function.prototype.bindIE = function ( obj ) {
   // implementation here
}

// usage
var sum_bound = sum.bindIE( null, 1, 2 );
console.log( sum_bound() );                // 3