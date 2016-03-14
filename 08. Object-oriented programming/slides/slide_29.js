// Base `Animal` class
function Animal( type ) {
   this.type = type;
}

Animal.prototype = {
   move : function ( position ) {
      console.info( 'The animal moves to', position );
   },
   
   sayHi : function () { console.log( 'hi' ); }
};