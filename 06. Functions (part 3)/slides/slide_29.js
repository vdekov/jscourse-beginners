function foo ( a, b ) {
   return (
      this.name + 
      ' a: ' + a +
      ', b: ' + b
   );
}

foo( 'lorem', 'ipsum' );
foo.call({ name : 'Call' }, 'lorem', 'ipsum' );
foo.apply({ name : 'Apply' }, ['lorem', 'ipsum'] );