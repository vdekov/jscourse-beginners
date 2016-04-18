// create new XHR instance
var xhr = new XMLHttpRequest();

// open the gate :) (set the state to "open")
// params: method (GET/POST), url, async (true, false)
// GET requests: embed params directly into the url
xhr.open( 'GET', 'hello.php?name=Vladi&foo=bar', true );

// handle response
xhr.onload = function ( e ) {
   // print the response
   console.log( this.responseText );
}

// send the XMLHttpRequest with some POST data
xhr.send();