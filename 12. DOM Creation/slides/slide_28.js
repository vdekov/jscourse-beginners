var table = document.createElement( 'table' );
table.setAttribute( 'border', '1' );
document.body.appendChild( table );

console.time( 'cloneNode test' );
var tr = document.createElement( 'tr' );
table.appendChild( tr );
for ( var j = 0; j < 3; j++ ) {
   var td = document.createElement( 'td' );
   td.appendChild(
      document.createTextNode( 'cell text' )
   );
   tr.appendChild( td );
}
for( var i = 0; i < 999; i++ ) {
   table.appendChild( tr.cloneNode( true ) );
}
console.timeEnd( 'cloneNode test' );        // ~ 6.358ms