var table = document.createElement( 'table' );
table.setAttribute( 'border', '1' );
document.body.appendChild( table );

console.time( 'innerHTML test' );
var html = '';
for ( var i = 0; i < 1000; i++ ) {
   html += '<tr>';
   for ( var j = 0; j < 3; j++ ) {
      html += '<td>cell text</td>';
   }
   html += '</tr>';
}
table.innerHTML = html;
console.timeEnd( 'innerHTML test' );        // ~ 22.249ms