var person = {
   name    : 'Vladi',
   logName : function () {
      console.log( this.name );
   }
};

// make sure `this` refers to `person` object
setTimeout( function () {     // seriously???
   person.logName();
}, 1000 );