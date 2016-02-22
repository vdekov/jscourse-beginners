var a = number == 3 ? ( number < 5 ? console.log( ' < 5 ' ) : console.log( ' >= 5 ' ) ) : false ;


// TASK 1
for (var prop in window) {
   console.log( prop ); // window[ prop ], window.prop
}

// TASK 2
var array = [ 5, 78, 34, 1, 54, 99, 7, 22, 11, 47, 83, 67 ];

var temp = array[0];
for ( var i = 1; i < array.length; i++ ) {
   if ( temp < array[ i ] ) {
      temp = array[ i ];
   }
}
console.log( temp );

// TASK 3
var animals = [
   { name : 'Tiger', type: 1 },
   { name : 'Turtle', type: 2 },
   { name : 'Lion', type: 1 },
   { name : 'Lizard', type: 2 }
];

for ( var i = 0; i < animals.length; i++ ) {
   var item = animals[ i ];
   
   switch ( item.type ) {
   case 1 :
      item.type = 'Mammal';
      break;
   case 2 :                               // default:
      item.type = 'Reptile';
      break;
   }
   
   console.log( item.name + ' is a ' + item.type );
}






