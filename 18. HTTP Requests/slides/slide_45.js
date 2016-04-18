var img = new Image();
img.onload = function () {
   console.log( 'All done!' );
}

img.src = 'hello.php?foo=bar';