var person = {
   name    : 'Vladi',
   logName : function () {
      console.log( this.name );
   }
};

// what will logs the following?
setTimeout( person.logName, 1000 );