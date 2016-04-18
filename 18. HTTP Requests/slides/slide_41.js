// create the <form/>
var form = document.createElement('form');
form.style.display = 'none';

// add url, method & target: iframe ID ("myframe")
form.action = 'hello.php';
form.method = 'POST';
form.target = 'myframe';

// finally append to DOM
document.body.appendChild( form );

// add params as <input/>s
var param1 = document.createElement('input');
param1.setAttribute( 'type', 'text' );
param1.name    = 'foo'; // name of the param
param1.value   = 'bar'; // value of the param
form.appendChild( param1 );

// submit the form
form.submit();