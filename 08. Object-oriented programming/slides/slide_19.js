function Person( name ) {
   this.name = name;
   function getName() {
      return this.name;
   }
   console.log( getName() );  // ???
}

function Person( name ) {
   this.name   = name;
   var getName = function () {
      return this.name;
   }.bind( this );
   console.log( getName() );  // returns `name`
}