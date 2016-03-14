Function.prototype.bindIE = function ( obj ) {
   var fn   = this;
   var args = Array.prototype.slice.call( arguments );
   obj      = args.shift();
   
   return function () {
      return fn.apply(
         obj,
         args.concat( Array.prototype.slice.call( arguments ) )
      );
   }
}

function sum () {
   var sum = 0;
   var args = [].slice.call( arguments );
   
   args.forEach( function ( arg ) {
      sum += arg;
   });
   
   return sum;
}

// usage
var sum_bound = sum.bindIE( null, 1, 2 );
console.log( sum_bound() );                // 3