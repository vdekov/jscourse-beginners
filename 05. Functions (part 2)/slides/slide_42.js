function Person( name ) {
   this.name    = name;
   this.getName = function () {
      return this.name;
   };
};

var person = new Person( 'Vladi' );
console.log( person.getName() );       // "Vladi"