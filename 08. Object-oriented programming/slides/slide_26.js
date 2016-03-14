var object = {
   'lorem' : 'ipsum'
};

object.hasOwnProperty( 'lorem' );         // true
Object.prototype.foo = 'bar';             // set `foo` property a value
object.hasOwnProperty( 'foo' );           // false
object.foo;                               // "bar"
object.hasOwnProperty( 'name' );          // false