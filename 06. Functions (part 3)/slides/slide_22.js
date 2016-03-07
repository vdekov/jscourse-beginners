function Person( name ) {
   this.name    = name;
   this.getName = function () {
      return this.name;
   }
}

// here `this` refers to `person1` instance
var person1 = new Person( 'Vladi' );

// here `this` refers to `person2` instance
var person2 = new Person( 'Persho' );