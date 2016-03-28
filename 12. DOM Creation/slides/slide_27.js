var table = document.createElement( 'table' );
table.setAttribute( 'border', '1' );
document.body.appendChild( table );

console.time( 'innerHTML test' );
var html = [];
for ( var i = 0; i < 1000; i++ ) {
   html.push( '<tr>' );
   for ( var j = 0; j < 3; j++ ) {
      html.push( '<td>cell text</td>' );
   }
   html.push( '</tr>' );
}
table.innerHTML = html.join( '' );
console.timeEnd( 'innerHTML test' );        // ~ 18.903ms