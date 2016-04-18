// create new XHR instance
var xhr = new XMLHttpRequest();

// open the gate :) (set the state to "open")
// params: method (GET/POST), url, async (true, false)
xhr.open( 'GET', 'hello.html', true );

// handle response (here we use old-school technique)
xhr.onload = function ( e ) {
   // print the response
   console.log( this.responseText );
}

// send the XMLHttpRequest
xhr.send();