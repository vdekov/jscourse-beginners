// evaluate a piece of code
eval( 'console.info( "I was evaluated." )' );

var ipsum = 'ipsum';
var result = 'lorem' + eval( 'ipsum + "dolor"' );
console.info( result );    // "loremipsumdolor"