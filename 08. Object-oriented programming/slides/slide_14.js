// `Animal`           - our constructor
// `Animal.prototype` - our "class"
function Animal( type ) {
   // `type`          - constructor parameter
   // `this.type`     - property
   this.type = type;
}

Animal.prototype = {
   constructor : Animal,
   // `speak`         - method
   speak : function () {
      console.log( '' );
   }
};

// `cat` (object) is an instance of `Animal`
var cat = new Animal( 'cat' );