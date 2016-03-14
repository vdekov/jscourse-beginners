// `Bird` class
function Bird( name ) {
   this.name = name;
   // call the parent constructor
   Animal.call( this, 'bird' );
   // inherit the prototype of Animal
   Object.assign( this, Animal.prototype );
   // overwrite `move` method
   Bird.prototype.move = function ( position ) {
      // call parent `move` method
      Animal.prototype.move.apply( this, arguments );
      // extend `Bird.move` method
      fly.apply( this, arguments );
   }
   // private method
   function fly( position ) {
      console.info( 'The', this.type, 'flies!' );
   }
}