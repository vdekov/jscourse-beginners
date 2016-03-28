var table = document.createElement( 'table' );
table.setAttribute( 'border', '1' );
document.body.appendChild( table );

console.time( 'createDocumentFragment test' );
var tr = document.createElement( 'tr' );
var td = document.createElement( 'td' );
td.innerText = 'cell text';
for ( var i = 0; i < 3; i++ ) {
   tr.appendChild( td.cloneNode( true ) );
}
var fragment = document.createDocumentFragment();
for ( var i = 0; i < 10; i++ ) {
   fragment.appendChild( tr.cloneNode( true ) );
}
for ( var i = 0; i < 3; i++ ) {
   fragment.appendChild( fragment.cloneNode( true ) );
}
for ( var i = 0; i < 45; i++ ) {
   fragment.appendChild( tr.cloneNode( true ) );
}
for ( var i = 0; i < 3; i++ ) {
   fragment.appendChild( fragment.cloneNode( true ) );
}
table.appendChild( fragment );
console.timeEnd( 'createDocumentFragment test' );             // ~ 4.393ms
console.log( document.getElementsByTagName( 'tr' ).length );  // ???