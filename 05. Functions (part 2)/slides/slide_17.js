var timeout_id = setTimeout( function () {
   console.log( '1 second timeout' );
}, 1000 );

// cancel the timeout
clearTimeout( timeout_id );

var interval_id = setInterval( function () {
   console.log( '2.5 seconds periodical' );
}, 2500 );

// cancel the interval
clearInterval( interval_id );