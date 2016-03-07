// declare a "class"
function Person ( name, age ) {
   // the function itself is our constructor
   this.name = name;
   this.age  = age;
   
   // we declare all methods inside the constructor
   this.getName = function () {
      return this.name;
   }
}

var person1 = new Person( 'Vladi', 25 );
console.log( person1.getName() );        // "Vladi"
var person2 = new Person( 'Pesho', 27 );