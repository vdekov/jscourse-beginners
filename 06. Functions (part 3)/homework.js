var storage = {
   data : {},
   
   get  : function ( key ) {
      return this.data[ key ];
   },
   
   set  : function ( key, value ) {
      this.data[ key ] = value;
   },
   
   getMultiple : function ( keys ) {
      var result = [];
      
      for( var i = 0; i < keys.length; i++ ) {
         result.push( this.data[ keys[ i ] ] );
      }
      
      return result;
   },
   
   setMultiple : function ( object ) {
      for ( var key in object ) {
         this.data[ key ] = object[ key ];
      }
   }
};

storage.set( 'foo', 'bar' );
storage.get( 'foo' );
storage.get( 'moo' );
storage.foo;

storage.setMultiple({
   name : 'Vladi',
   age  : 25
});
storage.getMultiple([ 'foo', 'name', 'age' ]);