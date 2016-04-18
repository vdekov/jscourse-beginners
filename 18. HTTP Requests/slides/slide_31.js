var xhr = new XMLHttpRequest();
xhr.open( 'POST', 'hello.php', true );

xhr.onload = function () {
   document.body.innerHTML = this.responseText;
}

// create FormData object
var data = new FormData();

// populate some parameters
data.append( 'name', 'Form Data object' );
data.append( 'foo', 'bar' );

// send the FormData
xhr.send( data );