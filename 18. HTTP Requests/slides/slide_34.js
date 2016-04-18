var xhr = new XMLHttpRequest();
xhr.open( 'POST', 'hello.php', true );

// observe "progress"
xhr.onprogress = function ( event ) {
   console.log( 'Bytes loaded:', event.loaded );
}

var data = new FormData();
// append huge data in order to test the progress
data.append( 'foo', new Array(100000).join('-') );

// send
xhr.send( data );