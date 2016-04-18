JSON.stringify(
   {
      name : 'Vladi',
      age  : 25
   }
);
// output: '{"name":"Vladi","age":25}'

JSON.parse(
   '{"name":"Vladi","age":25}'
);
// output: Object {name: "Vladi", age: 25}

// handle parsing invalid JSON
try {
   JSON.parse( '{invalid:"json"}' );
} catch ( e ) {
   console.log( 'Parsing invalid JSON!' );
}