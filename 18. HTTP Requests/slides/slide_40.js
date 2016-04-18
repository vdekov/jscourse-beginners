// create the <iframe/>
var iframe = document.createElement('iframe');
iframe.style.display = 'none';   // hide from visitors

// set an ID (we'll use that ID in the <form> target)
iframe.id = iframe.name = 'myframe';

// finally append to DOM
document.body.appendChild( iframe );

// handle response
iframe.onload = function () {
   // do something with the response text
   console.log( this.contentWindow.document.body.innerHTML );
}