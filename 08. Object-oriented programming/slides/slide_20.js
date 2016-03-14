function Person( name ) {
   this.name = name;
   console.log( getName.call( this ) );  // returns `name`
   function getName() {
      return this.name;
   }
}