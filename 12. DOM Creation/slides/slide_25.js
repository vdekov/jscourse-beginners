var table = document.createElement( 'table' );
table.setAttribute( 'border', '1' );
document.body.appendChild( table );

console.time( 'createElement test' );
for ( var i = 0; i < 1000; i++ ) {
   var tr = document.createElement( 'tr' );
   table.appendChild( tr );
   for ( var j = 0; j < 3; j++ ) {
      var td = document.createElement( 'td' );
      td.appendChild(
         document.createTextNode( 'cell text' )
      );
      tr.appendChild( td );
   }
}
console.timeEnd( 'createElement test' );        // ~ 32.269ms