var timeout_id = setTimeout( function () {
   alert( '10 seconds timeout' );
}, 10000 );

// cancel the timeout
clearInterval( timeout_id );