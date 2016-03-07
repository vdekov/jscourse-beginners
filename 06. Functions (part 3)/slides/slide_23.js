var person = {
   name     : 'Vladi',
   getName  : function () {
      // here `this` refers to the single object,
      // a.k.a. `person`
      return this.name;
   }
};