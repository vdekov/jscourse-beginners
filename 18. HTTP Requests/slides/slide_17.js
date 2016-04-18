// create new XHR instance
var xhr = new XMLHttpRequest();

// open the gate :) (set the state to "open")
// params: method (GET/POST), url, async (true, false)
xhr.open( 'POST', 'hello.php', true );

// handle response
xhr.onload = function ( e ) {
   // print the response
   console.log( this.responseText );
}

// set proper HTTP Header before sending the request
xhr.setRequestHeader(
   'Content-type', 'application/x-www-form-urlencoded'
);

// send the XMLHttpRequest with some POST data
xhr.send('name=Vladi&foo=bar');