// Base `Animal` class
function Animal( type ) {
   this.type = type;
}

Animal.prototype.getType = function () {
   return this.type;
};

// `Cat` class
// Create prototype object from 
// new instance of `Animal`
Cat.prototype = new Animal( 'mammal' );
function Cat() {}
Cat.prototype.speak = function () {
   console.log( 'Meowww' );
};