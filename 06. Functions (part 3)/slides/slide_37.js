var person = {
   name    : 'Vladi',
   logName : function () {
      console.log( this.name );
   }
};

setTimeout( person.logName, 2000 );    // "undefined"

// log the name after 2s delay
// bind the `person` object to the function
// callback as by passing functions as reference
// we loose the context
setTimeout( person.logName.bind( person ), 2000 );