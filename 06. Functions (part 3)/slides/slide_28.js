var person = {
   name    : 'Vladi',
   getName : function () {
      return this.name;
   }
};

person.getName.call({name : 'Pesho'});   // "Pesho"
person.getName.apply({});                // undefined
person.getName();                        // "Vladi"