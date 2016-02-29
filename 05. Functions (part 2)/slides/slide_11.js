function assert( is_true, call_ok, call_fail ) {
   is_true ?
      call_ok( 'Statement match' ) :
      call_fail( 'Statement does not match' );
}

function info( message ) {
   console.info( message );
}

function error( message ) {
   console.error( message );
}

assert( 4 == 4, info, error );
assert( 5 == 4, info, error );