function Person( name, age ) {
   this.name = name;     // `name` is public
   var _age  = age;      // `_age` is private
   
   // `introduce` is public method
   this.introduce = function () {
      console.log( 'Hi, I am ' + this.name + ', ' + getAge() );
   };
   
   // `getAge` is private method
   function getAge() {
      return _age;
   }
}

// in the prototype everything is public
Person.prototype.getName = function () {
   return this.name;
}