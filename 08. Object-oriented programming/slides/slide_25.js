function Person( name ) {
   this.name = name;
};

var me = new Person( 'Vladi' );
me.hasOwnProperty( 'name' );    // true

Person.prototype.age = 0;
me.hasOwnProperty( 'age' );     // false
me.age;                         // 0

Person.prototype.age = 99;
me.age;                         // 99
me.age = 25;                    // set age
me.hasOwnProperty( 'age' );     // true

Person.prototype.age = 0;
me.age;                         // 25

var pesho = new Person( 'Pesho' );
pesho.age;                      // ???