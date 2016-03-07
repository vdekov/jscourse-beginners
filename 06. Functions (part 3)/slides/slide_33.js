// declare a function that returns
// the largest number
function largest() {
   return Math.max.apply( null, arguments );
}

largest( 3, 9, 2, 18, 54, 33 );        // 54