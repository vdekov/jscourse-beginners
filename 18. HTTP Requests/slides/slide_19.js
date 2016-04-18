// create new XHR instance
var xhr = new XMLHttpRequest();

// open the gate :) (set the state to "open")
// params: method (GET/POST), url, async (true, false)
xhr.open( 'POST', 'hello.php', true );

// handle response
xhr.onload = function ( e ) {
   // append the HTML
   var tmp       = document.createElement('div');
   tmp.innerHTML = this.responseText;
   document.body.appendChild( tmp );
}

// set proper HTTP Header before sending the request
xhr.setRequestHeader( 
   'Content-type', 'application/x-www-form-urlencoded'
);

// send the XMLHttpRequest with some POST data
xhr.send('name=Vladi&foo=bar');