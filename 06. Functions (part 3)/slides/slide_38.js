var person = {
   name    : 'Vladi',
   getName : function () {
      return this.name;
   }
};

var getName       = person.getName;
var getNamePerson = person.getName.bind( person );

// the following logs "undefined", "Vladi"
console.log( getName(), getNamePerson() );